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
    <nav className="flex flex-col md:flex-row gap-5 py-8 md:px-28 justify-center md:justify-between">
      <Logo />
      <div className="flex gap-8 items-center justify-center nav-links">
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
