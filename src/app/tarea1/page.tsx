import React from "react";

export default function page() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-4">¿Qué es el diseño responsive?</h1>
      <p className="text-lg mb-6">
        El diseño responsive es un enfoque de diseño web que hace que las
        páginas web se vean bien en una variedad de dispositivos y tamaños de
        pantalla. Utiliza consultas de medios (media queries) en CSS para
        aplicar diferentes estilos según el tamaño de la pantalla.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Ejemplo Container</h2>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">
        <code>
          {`
.container {
  width: 100%;
}


          `}
        </code>
      </pre>
      <div
        className="container bg-blue-500 p-6 rounded-lg text-center text-white"
        style={{ border: "1px solid #000" }}
      >
        Contenedor Responsive
      </div>

      <h2 className="text-2xl font-semibold mt-8">
        Diseño Responsive con Grid
      </h2>
      <p className="mb-4">
        CSS Grid Layout es un sistema de diseño bidimensional que te permite
        crear diseños complejos utilizando filas y columnas.
      </p>
      <h3 className="text-xl font-medium">Ejemplo con CSS </h3>
      <pre className="">
        <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg mb-6">
          <code>
            {`
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      width: 1000px; /* Establece un ancho fijo para que el contenido sea más ancho que el contenedor */
    }

    .grid-item {
      background-color: #ccc;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }
    `}
          </code>
        </div>
      </pre>
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          className="grid-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          Item 1
        </div>
        <div
          className="grid-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          Item 2
        </div>
        <div
          className="grid-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          Item 3
        </div>
        <div
          className="grid-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          Item 4
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8">
        Diseño Responsive con Flexbox
      </h2>
      <p className="mb-4">
        Flexbox es un sistema de diseño unidimensional que te permite distribuir
        espacio entre los elementos de una interfaz y alinear el contenido de
        una manera flexible.
      </p>
      <h3 className="text-xl font-medium">Ejemplo con CSS</h3>
      <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg mb-6">
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">
          <code>
            {`

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.flex-item {
  background-color: #ccc;
  padding: 20px;
  text-align: center;
  flex: 1 1 calc(33.333% - 32px);
  border-radius: 8px;
}
          `}
          </code>
        </pre>
      </div>
      <div
        className="flex-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        <div
          className="flex-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            flex: "1 1 calc(33.333% - 32px)",
            borderRadius: "8px",
          }}
        >
          Item 1
        </div>
        <div
          className="flex-item"
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            flex: "1 1 calc(33.333% - 32px)",
            borderRadius: "8px",
          }}
        >
          Item 2
        </div>
        <div
          className="flex-item "
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            textAlign: "center",
            flex: "1 1 calc(33.333% - 32px)",
            borderRadius: "8px",
          }}
        >
          Item 3
        </div>
      </div>
    </div>
  );
}
