"use client";
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <Link
            href={href}
            key={href}
            className={classNames({
              "text-zinc-900": currentPath === href,
              "text-zinc-500": currentPath !== href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
