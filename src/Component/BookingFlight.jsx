import Header from "../Component/Header";
import { Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import * as yup from "yup";
import "./Booking.css";

import withReactContent from "sweetalert2-react-content";

const BookingFlight = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const MySwal = withReactContent(Swal);

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name Required"),
    lastName: yup.string().required("Last Name Required"),
    DepartureDate: yup.string().required("select Departure Date"),
    arrivalDate: yup.string().required("select Arrival Date"),
    email: yup
      .string()
      .required("Email Required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      ),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^(\+?\d{1,4}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
        "Invalid phone number"
      ),
    numberOfGuests: yup
      .string()
      .required("Number of Guests is required")
      .notOneOf(["Select from list"], "Please select a valid number of guests"),
    ArrivalFlightOptions: yup
      .string()
      .required("Please select Arrival Flight Options")
      .notOneOf(["Select from list"], "Please select Arrival Flight Options"),
    DepartureFlightOptions: yup
      .string()
      .required("Please select Departure Flight Options")
      .notOneOf(["Select from list"], "Please select Departure Flight Options"),
  });

  const allowedEmails = [
    "ibraj.grd@gmail.com",
    "ibraj.senocare@gmail.com",
    "ibrajkhan.grd@gmail.com",
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      DepartureDate: "2024-11-23",
      arrivalDate: "2024-11-21",
      numberOfGuests: "",
      ArrivalFlightOptions: "",
      DepartureFlightOptions: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      if (!allowedEmails.includes(values.email)) {
        MySwal.fire({
          icon: "error",
          title: "Not Allowed",
          text: "You are not allowed to fill this form.",
        });
        return;
      }
      setLoading(true);

      // Fetch data from the Google Sheet to check if the email has already been submitted
      const response = await fetch(
        import.meta.env.VITE_BOOKING_Flight_REQUESTDB
      );
      const data = await response.json();

      const emailAlreadySubmitted = data.some(
        (entry) => entry.Email === values.email
      );

      if (emailAlreadySubmitted) {
        MySwal.fire({
          icon: "warning",
          title: "Already Submitted",
          text: "You have already submitted the form.",
        });
        setLoading(false);
        return;
      }

      // setLoading(true);
      const googleSheetData = {
        FirstName: values.firstName,
        LastName: values.lastName,
        Email: values.email,
        Phone: values.phone,
        NumberOfGuests: values.numberOfGuests,
        ArrivalDate: values.arrivalDate,
        DepartureDate: values.DepartureDate,
        ArrivalFlightOptions: values.ArrivalFlightOptions,
        DepartureFlightOptions: values.DepartureFlightOptions,
      };
      // MySwal.fire({
      //   icon: "success",
      //   title: "You are welcome",
      // });
      // setLoading(false);

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_FLIGHT_TEMPLATE,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((res) => {
          console.log("Email sent successfully:", res);
          // Proceed to submit to Google Sheets
          return fetch(import.meta.env.VITE_BOOKING_Flight_REQUESTDB, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: [googleSheetData],
            }),
          });
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data submitted to sucessful:", data);
          MySwal.fire({
            icon: "success",
            title: "You are welcome",
          });
          setTimeout(() => {
            setLoading(false);
            resetForm();
          }, 1000);
        })
        .catch((error) => {
          console.error("Error:", error);
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Pls Enter correct Email id or Try after some time",
          });
          setTimeout(() => {
            setLoading(false);
            resetForm();
          }, 2000);
        });
    },
  });

  return (
    <div id="flightBooking">
      <Header />
      <Container fluid className="booking__form">
        <h3 className="montaga-regulars">Flight Booking Form</h3>
        <Row>
          <Col>
            <Form
              name="contact"
              onSubmit={formik.handleSubmit}
              noValidate
              className="form__content"
              // onSubmit={() => handleSubmit(submitFormData())}
              ref={formRef}>
              <div className="rsvp__content">
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik101"
                    className="position-relative text_field">
                    <Form.Label className="montaga-regulars label_">
                      First name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      placeholder="First name"
                      isInvalid={!!formik.errors.firstName}
                      isValid={
                        formik.touched.firstName && !formik.errors.firstName
                      }
                    />
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustom02 "
                    className="text_field">
                    <Form.Label className="montaga-regulars label_">
                      Last name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      placeholder="Last name"
                      isValid={
                        formik.touched.lastName && !formik.errors.lastName
                      }
                      isInvalid={!!formik.errors.lastName}
                    />
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>

                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                    className="text_field">
                    <Form.Label className="montaga-regulars label_">
                      Email
                    </Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        aria-describedby="inputGroupPrepend"
                        isValid={formik.touched.email && !formik.errors.email}
                        isInvalid={!!formik.errors.email}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="montaga-regulars">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                      <Form.Control.Feedback className="montaga-regulars">
                        Looks Good!
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustom02 "
                    className="text_field">
                    <Form.Label className="montaga-regulars label_">
                      Phone
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      placeholder="Phone Number"
                      isValid={formik.touched.phone && !formik.errors.phone}
                      isInvalid={!!formik.errors.phone}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.phone}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustom02 "
                    className="text_field">
                    <Form.Label className="montaga-regulars label_">
                      Arrival Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="arrivalDate"
                      onChange={formik.handleChange}
                      value={formik.values.arrivalDate}
                      placeholder="Arrival Date"
                      isValid={
                        formik.touched.arrivalDate && !formik.errors.arrivalDate
                      }
                      isInvalid={!!formik.errors.arrivalDate}
                    />

                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.arrivalDate}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustom02 "
                    className="text_field">
                    <Form.Label className="montaga-regulars label_">
                      Departure Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="DepartureDate"
                      onChange={formik.handleChange}
                      value={formik.values.DepartureDate}
                      placeholder="Departure Date"
                      isValid={
                        formik.touched.DepartureDate &&
                        !formik.errors.DepartureDate
                      }
                      isInvalid={!!formik.errors.DepartureDate}
                    />

                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.DepartureDate}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="text_field"
                    controlId="validationFormikUsername2">
                    <Form.Label className="montaga-regulars label_">
                      Number of Guests
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="numberOfGuests"
                      placeholder="select"
                      value={formik.values.numberOfGuests}
                      onChange={formik.handleChange}
                      isValid={
                        formik.touched.numberOfGuests &&
                        !formik.errors.numberOfGuests
                      }
                      isInvalid={!!formik.errors.numberOfGuests}>
                      <option>Select from list</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </Form.Select>
                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.numberOfGuests}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="text_field"
                    controlId="validationFormikUsername2">
                    <Form.Label className="montaga-regulars label_">
                      Arrival Flight Option
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="ArrivalFlightOptions"
                      placeholder="select"
                      value={formik.values.ArrivalFlightOptions}
                      onChange={formik.handleChange}
                      isValid={
                        formik.touched.ArrivalFlightOptions &&
                        !formik.errors.ArrivalFlightOptions
                      }
                      isInvalid={!!formik.errors.ArrivalFlightOptions}>
                      <option>Select from list</option>
                      <option value="Indigo Airlines, 6E-2423, Delhi - 08:05, Udaipur - 09:25">
                        Indigo Airlines, 6E-2423, Delhi - 08:05, Udaipur - 09:25
                      </option>
                      <option value="Air India, AI-469, Delhi - 11:00, Udaipur - 12:15">
                        Air India, AI-469, Delhi - 11:00, Udaipur - 12:15
                      </option>
                      <option value="Indigo Airlines, 6E-2101, Delhi - 13:10, Udaipur - 14:30">
                        Indigo Airlines, 6E-2101, Delhi - 13:10, Udaipur - 14:30
                      </option>
                      <option value="Vistara, UK-627, Delhi - 13:20, Udaipur - 14:55">
                        Vistara, UK-627, Delhi - 13:20, Udaipur - 14:55
                      </option>
                      <option value="Indigo Airlines, 6E-2123, Delhi - 17:55, Udaipur - 19:15">
                        Indigo Airlines, 6E-2123, Delhi - 17:55, Udaipur - 19:15
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.ArrivalFlightOptions}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="text_field"
                    controlId="validationFormikUsername2">
                    <Form.Label className="montaga-regulars label_">
                      Departure Flight Option
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="DepartureFlightOptions"
                      placeholder="select"
                      value={formik.values.FlightOptions}
                      onChange={formik.handleChange}
                      isValid={
                        formik.touched.DepartureFlightOptions &&
                        !formik.errors.DepartureFlightOptions
                      }
                      isInvalid={!!formik.errors.DepartureFlightOptions}>
                      <option>Select from list</option>
                      <option value="Indigo Airlines, 6E-2284, Udaipur-09:55, Delhi-11:15">
                        Indigo Airlines, 6E-2284, Udaipur-09:55, Delhi-11:15
                      </option>
                      <option value=" Air India, AI-470, Udaipur-12:50, Delhi-14:15">
                        Air India, AI-470, Udaipur-12:50, Delhi-14:15
                      </option>
                      <option value="Indigo Airlines, 6E-2102, Udaipur-15:00, Delhi-16:20">
                        Indigo Airlines, 6E-2102, Udaipur-15:00, Delhi-16:20
                      </option>
                      <option value="Vistara, UK-628, Udaipur-15:20, Delhi-16:45">
                        Vistara, UK-628, Udaipur-15:20, Delhi-16:45
                      </option>

                      <option value="Indigo Airlines, 6E-2242, Udaipur-20:00, Delhi-21:20">
                        Indigo Airlines, 6E-2242, Udaipur-20:00, Delhi-21:20
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback
                      type="invalid"
                      className="montaga-regulars">
                      {formik.errors.DepartureFlightOptions}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback className="montaga-regulars">
                      Looks Good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button
                  type="submit"
                  className="button-sub montaga-regulars mt-4">
                  {loading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  {loading ? "Processing..." : "Submit"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingFlight;
