"use client"

export default function Catalogue(){
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