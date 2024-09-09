import Logo from "../logo";
import { DarkMode } from "../theme/dark-mode";

const links = [
  {
    name: "About",
  },
  {
    name: "Skill",
  },
  {
    name: "Contact",
  },
];

export default function Header() {
  return (
    <nav className="grid grid-cols-1 gap-5 py-8 justify-center md:grid-cols-2 md:px-28">
      <div className="justify-self-center md:justify-self-start">
        <Logo />
      </div>
      <div className="flex gap-8 items-center nav-links md:justify-end justify-center">
        {links.map((link, index) => {
          return (
            <span
              key={index}
              className="cursor-pointer text-primary hover:text-on-background"
            >
              {link.name}
            </span>
          );
        })}
        <DarkMode />
      </div>
    </nav>
  );
}
