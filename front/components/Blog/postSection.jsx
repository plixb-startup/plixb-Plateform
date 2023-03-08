import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function PostSection() {

  const [posts, setPost] = useState([])
  const [category, setCategory] = useState([])

  async function fetchPosts() {
    const response = await axios.get("http://localhost:8080/api/post/")
    return response.data;
  }

  async function fetchCategory() {
    const response = await axios.get("http://localhost:8080/api/category/")
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
  }, [])

return (
  <div className="bg-white py-24 sm:py-3">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <Link href={`/posts/${post.id}`}>
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] "
                />
                <div className="absolute inset-0 rounded ring-inset ring-white hover:ring-4-black hover:scale-100 delay-50 duration-200 ease-in-out hover:ring-inset-black hover:border-8 border-white " />
              </Link>
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.creationDate}</time>
                {post.category &&
                  post.category.map((categ) => (
                    <a
                      key={categ.id}
                      href=""
                      className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {categ.name ? categ.name : ""}
                    </a>
                  ))}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="flex py-4">
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-indigo-500 hover:text-white hover:scale-125  transition duration-150 ease-in-out "
                >
                  En lire plus
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);
}
