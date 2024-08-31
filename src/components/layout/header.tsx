import Logo from "../logo";
import { ModeToggle } from "../theme/mode-toggle";

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
    <nav className="flex justify-between">
      <Logo />
      <div className="flex gap-5 items-center">
        {links.map((link, index) => {
          return <span key={index}>{link.name}</span>;
        })}
        <ModeToggle />
      </div>
    </nav>
  );
}
