import {NextResponse} from "next/server";

let ventes = [];

export async function GET(){
    return NextResponse.json(ventes);
}

export async function POST(request:Request){
    const body = await request.json();
    const newVente ={
        id: Date.now(),
        title: body.title,
        completed: false,
    };
    ventes.push(newVente);
    return NextResponse.json(newVente);
}

export async function PUT(request:Request){
    const body = await request.json();
    ventes = ventes.map((vente) =>
        vente.id === body.id ? { ...vente, completed: !vente.completed }: vente,
);
return NextResponse.json({ message:" Vente mise a jour"});
}

 export async function DELETE(request:Request) {
    const body = await request.json();
    ventes = ventes.filter((vente) => vente.id !== body.id);
    return NextResponse.json ({ message: 'Vente supprimee'});
} 