import React, { useState } from "react";
import axios from "axios";

export default function modalFormulaireFormateur({ setIsModalOpen }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const modul = {
      title,
    };

    axios
      .post("http://localhost:8080/api/category", categ)

      .then((response) => {
        console.log(response);
        const categ = response.data;
        setModules([...category, categ]);
        window.location.reload();
      });
  };

  function handleClose() {
    return setIsModalOpen(false);
  }
  return (
    <div className="fixed z-50 p-4 overflow-x-hidden bg-opacity-75 md:inset-0 h-modal md:h-full">
      <div className=" absolute left-0 right-5 insert-0 w-full">
        <div className="absolute  insert-0 my-20 mr-5 w-full bg-white rounded-lg">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="px-6 py-6 lg:px-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nom de la categorie
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setTitle(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Cloud"
                required
              />

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>
        {/* <div className="titleCloseBtn">
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div> */}
        {/* <div className="title">
            <h1>Création de Formateur</h1>
          </div> */}
      </div>
    </div>
  );
}
