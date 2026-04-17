import Link from "next/link";
import 'remixicon/fonts/remixicon.css'

export default function Header(){
  return (
    <div className="flex justify-between items-center  p-5 bg-blue-950">
      <div>
        <h1 className="text-slate-950 text-3xl">MonStock</h1> 
      </div>      
      <div className="">        
          <ul className="flex gap-12">
            <li className="hover:text-white text-2xl"><Link href="/Accueil">Accueil</Link></li>
            <li className="hover:text-white text-2xl"><Link href="/Ventes">Ventes</Link></li>
            <li className="hover:text-white text-2xl"><Link href="/Stock">Stock</Link></li>
          </ul>     
      </div>
      <div className="flex gap-4">   
        <i className="ri-moon-line bg-blue-200 p-2 rounded-full text-1xl text-slate-700"></i>
        <Link className="bg-slate-700 text-blue-300 p-2 rounded-full hover:text-white "  href="/">Demander un service</Link>        
      </div>
    </div>
    
    
      
        
  );
}