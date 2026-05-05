// // src/features/auth/pages/Login.tsx
// import AuthLayout from "../layouts/AuthLayout";
// import Input from "../ui/Input";
// // import Button from "../ui/Button";
// import Heading from "../ui/Heading";
// import { FaGoogle, FaLock, FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

import Login from "../features/auth/Login";

// export default function Login() {
//   return (
//     <AuthLayout>
//       {/* right side */}

//       <div className="bg-(--color-primary-500) w-[35%] flex flex-col justify-center gap-3 items-center px-6 text-center">
//         <Heading color="--color-primary-0"> welcome back!</Heading>
//         <p className="text-(--color-primary-50) mb-4">
//           To keep connected with use pleae login with your personal info
//         </p>
//         <button className="text-(--color-primary-50) text-sm px-12 py-2 bg-transparent border-2 border-(--color-primary-50) rounded-full uppercase">
//           sign up
//         </button>
//       </div>

//       {/* left side */}
//       <div className="grow px-12 py-8 text-(--color-primary-900) flex flex-col gap-2 items-center">
//         <Heading> Sign in to LinkNest</Heading>
//         <ul className="flex gap-3 mt-4">
//           {/* <li className="border rounded-full p-2">F</li> */}
//           <li className="border rounded-full p-2">
//             <FaGoogle />
//           </li>
//           {/* <li>in</li> */}
//         </ul>
//         <p className="text-(--color-primary-900)/40 mb-4 text-sm">
//           or use your email for registeration
//         </p>
//         <form className="space-y-4 flex flex-col w-[80%] items-center">
//           <Input icon={FaUser} placeholder="Username" type="text" />
//           <Input icon={MdEmail} placeholder="Email" type="text" />
//           <Input icon={FaLock} type="password" placeholder="Password" />

//           <button
//             type="submit"
//             className="bg-(--color-primary-500) text-(--color-primary-0) px-12 py-2 rounded-full uppercase"
//           >
//             Login in
//           </button>
//         </form>
//       </div>
//     </AuthLayout>
//   );
// }

export default function LoginPage() {
  return <Login />;
}
