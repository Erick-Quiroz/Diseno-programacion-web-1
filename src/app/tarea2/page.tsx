"use client";
import Image from "next/image";
import { data } from "@/constant/data";
import { useState } from "react";
import { Person } from "@/types/Person";


export default function Home() {
  const [selectPerson, setSelectPerson] = useState<Person | null>(null);
  const handleSelectPerson = (person: Person) => {
    setSelectPerson(person);
  };
  return (
    <div className="item-center justify-center text-center ">
      

      {!selectPerson ? (
        <section
          className="flex flex-wrap gap-4 items-center justify-center"
          id="menu"
        >
          {data.map((person) => (
            <button
              key={person.id}
              className=" bg-blue-900 rounded p-2 hover:bg-blue-500 cursor-pointer"
              onClick={() => handleSelectPerson(person)}
            >
              {person.title}
            </button>
          ))}
        </section>
      ) : (
        <div>
          <section className="" id="titles">
            <div id="title" className="uppercase border-b border-orange-900 ">
              {selectPerson.title}
            </div>
            <div
              id="encabezado"
              className="mt-10 border-b border-orange-900 inline-block text-center mx-auto"
            >
              {selectPerson.encabezado}
            </div>
          </section>
          <section className="" id="description">
            <p id="description" className="mt-10 border p-5">
              {" "}
              {selectPerson.description}
            </p>
          </section>
          <section
            className="pt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 "
            id="images"
          >
            {Object.values(selectPerson.img).map((src, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-6 w-[240px] h-[240px] overflow-hidden mx-auto"
              >
                <Image
                  src={src}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                  alt={selectPerson.title}
                />
              </div>
            ))}
          </section>
          <button
            onClick={() => {
              setSelectPerson(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Atras
          </button>
        </div>
      )}
    </div>
  );
}
