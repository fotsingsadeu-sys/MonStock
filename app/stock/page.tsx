export default function Stockk(){
    return(
        <div className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg">
            <h1 className="text-4xl">Gérer vos stocks de manière simplifiée </h1>
            <div className="flex justify-center items-center gap-50 mt-5">
                <h2> Total: 0 produits</h2>
                <button className="font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 text-slate-600 hover:text-white"><i className="ri-add-line"></i>Ajouter un produit</button>
            </div>
            <p className="p-10 mt-4 bg-slate-700 text-slate-400  ">Aucun produit en stock.</p>
            
        </div>
    )
}