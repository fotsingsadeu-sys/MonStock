"use client"
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Vente(){
  const [ventes, setVentes] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("/api/vente");
    const data = await res.json();
    setVentes(data);
  };

  useEffect(()=>{
    fetchTodos();
  }, []);

  const addVente = async () => {
    if (!title) return;
    await fetch("/api/todos",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({title}),
    });
    setTitle("");
    fetchTodos();
  };

  const toggleVente = async (id) => {
    await fetch ("/api/vente",{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });
    fetchTodos();
  };

  const deleteVente= async(id) => {
    await fetch("/api/vente",{
      method:"DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });
    fetchTodos();
  };

    return(
        <div>
            <div className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg">
            <h1 className="text-4xl">Suivez vos ventes de manière efficace</h1>
            <div className="flex justify-center items-center gap-15 mt-5">
                < input value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="Nouvelle vente" className="text-2xl"/>   
            <button onClick={addVente} className=" font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 text-slate-600 hover:text-white"><i className="ri-add-line"></i>Ajouter vente</button>            
            </div> 

            <p className="p-10 mt-5 bg-slate-700 text-slate-400  ">Aucune vente. Commencer par en ajouter une.</p>
            
        </div>
    
    </div>
  );
}


        



    
