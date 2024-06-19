"use client"

import Image from "next/image";
import Link from "next/link";
import PostLink from "./blog/PostList";
import { useRouter } from "next/navigation";

export default function Home() {

  const postData = [
    {id:1,slug:'aaa',title: 'aaa'},
    {id:2,slug:'bbb',title: 'bbb'},
    {id:3,slug:'ccc',title: 'ccc'},
  ]

  const router = useRouter()

  return (
    <>
      <h1 className="text-4xl text-green-500">Hello, Home Page</h1><br />
      <Link rel="stylesheet" href="/dashboard" >Dashboard</Link>
      <PostLink posts={postData}></PostLink>
      <br />
      <button type="button" onClick={()=>router.push("/dashboard")}>
        Dashboard
      </button>
    </>
  );
}
