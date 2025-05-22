import { navItems } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full h-16 flex justify-between items-center bg-[#88848140] px-[120px]">
      <div>
        <p className="brand-name">
          <span className="font-semibold">Elan</span> Studio
        </p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-6">
            {navItems.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                className="text-base uppercase font-normal"
              >
                <li>{name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
