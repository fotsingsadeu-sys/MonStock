import { NextResponse } from "next/server";

interface Catalogue {
    id: number;
    title: string;
    completed: boolean;
}
let catalogue: Catalogue[] = [];

let catalogues: Catalogue[]= [];

export async function GET(){
    return NextResponse.json(catalogues);
}

export async function POST(request:Request){
    const body = await request.json();
    const newCatalogue ={
        id: Date.now(),
        title: body.title,
        completed: false,
    };
    catalogues.push(newCatalogue);
    return NextResponse.json(newCatalogue);
}

export async function PUT(request:Request){
    const body = await request.json();
    catalogues = catalogues.map((catalogue) =>
        catalogue.id === body.id ? { ...catalogue, completed: !catalogue.completed }: catalogue,
);
return NextResponse.json({ message:" Catalogue mise a jour"});
}

 export async function DELETE(request:Request) {
    const body = await request.json();
    catalogues = catalogues.filter((catalogue) => catalogue.id !== body.id);
    return NextResponse.json ({ message: 'Catalogue supprime'});
} 