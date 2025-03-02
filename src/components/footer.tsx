import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 p-5 ">
      <div className="flex flex-wrap justify-between text-white">
        <div className="">EQ</div>
        <div className="">TECBA</div>
        <div className="">@</div>
      </div>
      <div className="container mx-auto text-center text-white p-6">
        <p>&copy; 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
