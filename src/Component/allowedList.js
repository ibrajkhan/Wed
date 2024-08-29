// const allowedEmails = ["allowed@example.com", "another@example.com"];

// onSubmit: async (values, { resetForm }) => {
//     console.log(values);

//     // Check if the email is in the allowed list
//     if (!allowedEmails.includes(values.email)) {
//       MySwal.fire({
//         icon: "error",
//         title: "Not Allowed",
//         text: "You are not allowed to fill this form.",
//       });
//       return;
//     }

//     // Fetch data from the Google Sheet to check if the email has already been submitted
//     const response = await fetch(import.meta.env.VITE_BOOKING_REQUESTDB);
//     const data = await response.json();

//     const emailAlreadySubmitted = data.some(entry => entry.Email === values.email);

//     if (emailAlreadySubmitted) {
//       MySwal.fire({
//         icon: "warning",
//         title: "Already Submitted",
//         text: "You have already submitted the form.",
//       });
//       return;
//     }

//     setLoading(true);
//     const googleSheetData = {
//       FirstName: values.firstName,
//       LastName: values.lastName,
//       Email: values.email,
//       NumberOfGuests: values.numberOfGuests,
//     };

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_HOTEL_TEMPLATE,
//         formRef.current,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then((res) => {
//         console.log("Email sent successfully:", res);
//         // Proceed to submit to Google Sheets
//         return fetch(import.meta.env.VITE_BOOKING_REQUESTDB, {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             data: [googleSheetData],
//           }),
//         });
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data submitted to Google Sheets successfully:", data);
//         MySwal.fire({
//           icon: "success",
//           title: "You are welcome",
//         });
//         setTimeout(() => {
//           setLoading(false);
//           resetForm();
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         MySwal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Please enter a correct Email ID or try again later.",
//         });
//         setTimeout(() => {
//           setLoading(false);
//           resetForm();
//         }, 2000);
//       });
//   },
