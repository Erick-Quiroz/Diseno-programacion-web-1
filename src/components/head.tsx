import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="px-6 flex justify-between items-center">
        <div className="text-white text-lg font-bold flex-1 text-center">
          <Link href={"/"}>EQ</Link>
        </div>

        <div className="text-white flex-1 text-center border-b hover:text-blue-500">
          {" "}
          <Link href={"/"}>Home</Link>
        </div>

        <div className="text-white flex-1 text-center text-sm">
          Diseño y Programación web I
        </div>
      </nav>
    </header>
  );
};

export default Header;
