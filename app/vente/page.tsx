
export default function Vente(){
    return(
        <div className="m-10 text-center bg-blue-950 text-slate-300 p-15 rounded-lg">
            <h1 className="text-4xl">Suivez vos ventes de manière efficace</h1>
            <div className="flex justify-center items-center gap-15 mt-5">
                <form action="" className="text-2xl">
                <label htmlFor="date">Date du jour: </label>
                <input type="date" name="date" id="date" />
            </form>
            <h2 className=" font-medium flex gap-2 bg-sky-500 p-3  rounded-md mt-1 text-slate-600 hover:text-white"><i className="ri-add-line"></i>Nouvelle vente</h2>            
            </div>            
            <h2 className="mr-100">Total: 0 ventes</h2>
            <p className="p-10 mt-4 bg-slate-700 text-slate-400  ">Aucune vente. Commencer par en ajouter une.</p>
            
        </div>
    )
}