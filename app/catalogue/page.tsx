"use client"
import { useEffect,useState } from "react";
import Link from "next/link";
import 'remixicon/fonts/remixicon.css'

interface Catalogue {
  id: number;
  title: string;
  completed: boolean;
}
export default function Catalogue(){
      const [catalogues, setCatalogues] = useState<Catalogue[]>([]);
      const [title, setTitle] = useState("");
    
      const fetchCatalogues = async () => {
        const res = await fetch("/api/catalogue");
        const data = await res.json();
        setCatalogues(data);
      };
    
      useEffect(()=>{
        fetchCatalogues();
      }, []);
    
      const addCatalogue = async () => {
        if (!title) return;
        await fetch("/api/catalogue",{
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({title}),
        });
        setTitle("");
        fetchCatalogues();
      };
    
      const toggleCatalogue = async (id: number) => {
        await fetch ("/api/catalogue",{
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id}),
        });
        fetchCatalogues();
      };
    
      const deleteCatalogue= async(id: number) => {
        await fetch("/api/catalogue",{
          method:"DELETE",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id}),
        });
        fetchCatalogues();
      };

    return(
        <div  className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg">
            <h2 className="text-4xl ">Tous vos produits en un seul endroit.</h2>
            <p> Mettre une barre de recherche pour facilier la recherche des produits</p>
            <div className="flex justify-center items-center gap-50 mt-5">
                <h1> Total : 0 produits</h1>
                <button className="font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 text-slate-600 hover:text-white"><i className="ri-add-line"></i>voir le catalogue</button>
            </div>
            

        </div>
    )
}