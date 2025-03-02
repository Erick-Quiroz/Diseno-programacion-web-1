import Image from "next/image";
import React from "react";

export default function ImageResponsivePage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Medidas Web Responsive</h1>
      <p className="mb-6">
        Estas son las resoluciones de pantalla más comunes en todo el mundo para
        que adaptes tu web a medidas responsive:
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Tipos de Dispositivos y Tamaños de Pantalla
      </h2>
      <div className="w-[100%] h-[300px] relative mb-6 mx-auto">
        <Image src={"/img/web-design.jpg"} fill alt="img"></Image>
      </div>
      <ul className="list-disc list-inside mb-6">
        <li>Dispositivos móviles: 320px - 480px</li>
        <li>Tabletas: 481px - 768px</li>
        <li>Pantallas de escritorio: 769px - 1024px</li>
        <li>Pantallas de monitors: 1025px y más</li>
      </ul>
    </div>
  );
}
