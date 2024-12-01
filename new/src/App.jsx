import React, { useRef } from "react";

function UncontrolledForm() {
  // Create refs for each input field
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the values of the inputs using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Log the input values to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Optionally clear the form inputs
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;


// function PostWithFetchAsync() {
//   const postData = async () => {
//     const payload = { title: "React Fetch Async Example", body: "Using async/await" };

//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       console.log("Post Response (Fetch):", data);
//     } catch (error) {
//       console.error("Fetch API Error:", error);
//     }
//   };

//   return <button onClick={postData}>Post with Fetch</button>;
// }

// export default PostWithFetchAsync;


// import React from "react";

// function SimpleForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     const formData = new FormData(e.target);
//     console.log("Name:", formData.get("name"));
//     console.log("Email:", formData.get("email"));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" required />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default SimpleForm;


// query param
// import React from "react";
// import { useLocation } from "react-router-dom";

// function Destination() {
//   const location = useLocation();

//   // Extract query parameter
//   const queryParams = new URLSearchParams(location.search);
//   const name = queryParams.get("name");

//   return (
//     <div>
//       <h1>Destination Page</h1>
//       {name ? (
//         <p>Welcome, {name}!</p>
//       ) : (
//         <p>No name provided in the query parameter.</p>
//       )}
//     </div>
//   );
// }

// export default Destination;
