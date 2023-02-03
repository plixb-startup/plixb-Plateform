import AddCategories from './addCategories'
import axios from 'axios'
import React, { useState, useEffect } from 'react'








var date = Date.now();

const post = [
  {
    id: 1,
    name: "Lindsay Walton",
  
  },
];

export default function Board() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [category, setCategory] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const [post, setPost] = useState([])
  
  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  async function fetchCategory() {
    const response = await axios.get("http://localhost:8080/api/category/")
    return response.data;
  }

  async function fetchPost() {
    const response = await axios.get("http://localhost:8080/api/post/")
    return response.data;
  }

   async function deleteCategory(id) {
     const response = await axios.delete(`http://localhost:8080/api/category/${id}`);
   }

  useEffect(() => {
    async function fetchData() {
      const category = await fetchCategory();
      const post = await fetchPost();
      setCategory(category);
      setPost(post);
    }

    fetchData();
  }, []);






 return (
   <div className="px-4 sm:px-6 lg:px-8">
     <div className="sm:flex sm:items-center">
       <div className="sm:flex-auto">
         <h1 className="text-xl font-semibold text-gray-900"></h1>
         <p className="mt-2 text-sm text-gray-700">
           Ici vous pouvez ajouter des categories
         </p>
       </div>
       <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
         <button
           type="button"
           onClick={handleOpenModal}
           className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
         >
           Ajouter une categorie
         </button>
         {isModalOpen && <AddCategories setIsModalOpen={setIsModalOpen} />}
       </div>
     </div>
     <div className="mt-8 flex flex-col">
       <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
           <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
             <table className="min-w-full divide-y divide-gray-300">
               <thead className="bg-gray-50">
                 <tr className="divide-x divide-gray-200">
                   <th
                     scope="col"
                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                   >
                     <a className="group inline-flex">Modules</a>
                   </th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 bg-white">
                 {category &&
                   category.length > 0 &&
                   category.map((categ) => (
                     <tr key={categ.id}>
                       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                         {categ.title}
                       </td>
                       <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                         <button
                           type="button"
                           onClick={() => {
                             deleteCategory(categ.id)
                               .then(() => {
                                 setCategory(
                                   category.filter((c) => c.id !== categ.id)
                                 );
                                 setIsDeleted(true);
                               })
                               .catch((error) => {
                                 console.log(error);
                                 setIsDeleted(false);
                               });
                           }}
                           className="text-red-600 hover:text-red-900"
                         >
                           Delete
                         </button>
                       </td>
                     </tr>
                   ))}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
