
import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function BlogSection() {
   const [posts, setPost] = useState([]);
   const [category, setCategory] = useState([]);

   async function fetchPosts() {
     const response = await axios.get("http://localhost:8080/api/post/");
     return response.data;
   }

   async function fetchCategory() {
     const response = await axios.get("http://localhost:8080/api/category/");
     return response.data;
   }

   useEffect(() => {
     async function fetchData() {
       const posts = await fetchPosts();
       const category = await fetchCategory();

       setPost(posts);
       setCategory(category);
     }
     fetchData();
   }, []);
  
  
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Discover our articles and the latest market news
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-blue-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}
                  <a href="" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  {/* <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div> */}
                  <div className="ml-3">
                    {/* <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p> */}
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{post.creationDate}</time>
                      <span aria-hidden="true">&middot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
