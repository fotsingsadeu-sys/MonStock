"use client";
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(){
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };
  useEffect(()=>{
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!title) return;

    await fetch("/api/todos",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({title}),
    });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await fetch ("/api/todos",{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });
    fetchTodos();
  };

  const deleteTodo= async(id) => {
    await fetch("/api/todos",{
      method:"DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });

    fetchTodos();
  };

  return (
    <div className="text-center mt-11">    
      <h1> <span className="text-6xl">La gestion de</span> <br /> <span className="text-6xl text-sky-500">vos Ventes et  vos Stocks</span> <br /> <span className="text-6xl">devient plus facile</span> </h1>
      <p className="mt-3 text-3xl text-gray-500">MonStock, la plateforme deux en un qui 
         vous <br /> permet de suivre vos ventes et <br />  gérer votre stock de manière efficace et simplifiée.</p>   
      <div className=" mt-6 flex gap-10 justify-center">
         <Link className="pl-7 pr-7 pt-3 pb-3 p-10 bg-sky-500 text-slate-700 rounded-full hover:text-white" href="/">Inscription</Link>
        <Link className=" rounded-full border-2 border-slate-700 hover:bg-slate-700 hover:text-white text-sky-500  pl-5 pr-5 pt-3 pb-3"   href="/stock">Entrer un article</Link>
      </div>
        
    </div>
    
  );
}
    
