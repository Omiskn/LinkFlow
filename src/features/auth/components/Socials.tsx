import { FaGoogle } from "react-icons/fa";

export default function Socials() {
  return (
    <ul className="flex gap-3 mt-4">
      <li
        className="border rounded-full p-2 cursor-pointer
        hover:bg-[var(--color-primary-50)] transition"
      >
        <FaGoogle />
      </li>
    </ul>
  );
}
