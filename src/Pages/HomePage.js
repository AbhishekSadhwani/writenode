import { useEffect, useRef, useState } from "react";
import { getDocs } from "firebase/firestore";
import { colRef } from "../firebase/config";
import { PostCard, SkeletonCard } from "../Components";
import { useCustomTitle } from "../hook/useCustomTitle";

export const HomePage = () => {
  const [posts,setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);

  const postsRef = useRef(colRef);
  
  useEffect(() => {
    async function fetchDocs(){
      getDocs(colRef)
        .then(data => {
          setPosts(
            data.docs.map(document =>(
              {...document.data(),id:document.id}
            ))
          )
        })
    };
    console.log("--");
    fetchDocs();
  },[postsRef,toggle])
  
  useCustomTitle("Home");

  return (
    <section className="posts">
        {posts.map((post,index) => (
          post ? (<PostCard key={post.id}  post={post} toggle={toggle} setToggle={setToggle}/>) : (<SkeletonCard key={index} />) 
        ))}
        
    </section>
  )
}
