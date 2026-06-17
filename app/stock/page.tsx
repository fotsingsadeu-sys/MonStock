"use client";
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import 'remixicon/fonts/remixicon.css'

interface Stock {
  id: number;
  title: string;
  completed: boolean;
}
export default function Stock(){
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [title, setTitle] = useState("");

  const fetchStocks = async () => {
    const res = await fetch("/api/stock");
    const data = await res.json();
    setStocks(data);
  };
  
  useEffect(()=>{
    fetchStocks();
  }, []);

  const addStock = async () => {
    if (!title) return;
    await fetch("/api/stock",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({title}),
    });
    setTitle("");
    fetchStocks();
  };

  const toggleStock = async (id: number) => {
    await fetch ("/api/stock",{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });
    fetchStocks();
  };

  const deleteStock= async(id: number) => {
    await fetch("/api/stock",{
      method:"DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id}),
    });
    fetchStocks();
  };

    return(
        <div className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg box-border">
            <h1 className="text-4xl">Gérer vos stocks de manière simplifiée </h1>
            <div className="flex justify-center items-center gap-20 mt-5">
                <input value={title} onChange={(e) =>  setTitle(e.target.value)} placeholder="Entrer en stock"/> 
                
                <button onClick={addStock} className="font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 ml-5 text-slate-600 hover:text-white"><i className="ri-add-line"></i>Ajouter un produit</button>
                <ul>
                    {stocks.map((stock)=> (
                        <li key={stock.id}>
                        <span style={{textDecoration: stock.completed? "line-trough": "none",}} >
                            {stock.title}
                        </span>
                        <button onClick={() => toggleStock(stock.id)}> <i className="ri-check-line"></i> </button>
                        <button onClick={() => deleteStock(stock.id)}> <i className="ri-close-line"></i></button>
                        </li> ))}
                </ul>
            </div>
        </div>
    )}

<div className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg">
            <h1 className="text-4xl">Gérer vos stocks de manière simplifiée </h1>
            <div className="flex justify-center items-center gap-50 mt-5">
                <h2> Total: 0 produits</h2>
                <button className="font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 text-slate-600 hover:text-white"><i className="ri-add-line"></i>Ajouter un produit</button>
            </div>
            <p className="p-10 mt-4 bg-slate-700 text-slate-400  ">Aucun produit en stock.</p>
            
        </div>