// import { useState } from "react";

// const SignUpForm = ({ onSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       console.error("Passwords do not match");
//       return;
//     }

//     onSignUp(email, password);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//         />
//       </label>

//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />
//       </label>

//       <label>
//         Confirm Password:
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(event) => setConfirmPassword(event.target.value)}
//           required
//         />
//       </label>

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;
