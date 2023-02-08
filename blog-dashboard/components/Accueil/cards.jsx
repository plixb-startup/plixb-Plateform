import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";
import React, {Fragment, useEffect, useState} from 'react'



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cards() {

  const [posts, setPost] = useState([])
  const [categories, setCategory] = useState([])

  async function fetchPosts() {
    const response = await axios.get('http://localhost:8080/api/post/')
    return response.data;
  }

  async function fetchCategory() {
    const response = await axios.get('http://localhost:8080/api/category/');
    return response.data;
  }

  useEffect(() => {
    async function fetchData() {
      const posts = await fetchPosts();
      const category = await fetchCategory();
      setPost(posts)
      setCategory(category)
    }
    fetchData();
  }, [])


const stats = [
  {
    id: 1,
    name: "Total of Posts",
    posts: [],
    icon: UsersIcon,
    href: "/Post",
  },
  {
    id: 2,
    name: "Total of Categories",
    categories: [],
    icon: EnvelopeOpenIcon,
    href: "/Categories",
  },
];

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {stats.map((id, name, icon, href) => (
          <div
            key={id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                
               
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {name === "Posts" ? posts.length : null}
                {name === "Category" ? category.length : null}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href={href}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    
                    View all<span className="sr-only"> {name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
