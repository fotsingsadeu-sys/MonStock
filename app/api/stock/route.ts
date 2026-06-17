import { NextResponse } from "next/server";

interface Stock {
    id: number;
    title: string;
    completed: boolean;
}
let stocks: Stock[]= [];

export async function GET(){
    return NextResponse.json(stocks);
}

export async function POST(request:Request){
    const body = await request.json();
    const newStock ={
        id: Date.now(),
        title: body.title,
        completed: false,
    };
    stocks.push(newStock);
    return NextResponse.json(newStock);
}

export async function PUT(request:Request){
    const body = await request.json();
    stocks = stocks.map((stock) =>
        stock.id === body.id ? { ...stock, completed: !stock.completed }: stock,
);
return NextResponse.json({ message:" Stock mise a jour"});
}

 export async function DELETE(request:Request) {
    const body = await request.json();
    stocks = stocks.filter((stock) => stock.id !== body.id);
    return NextResponse.json ({ message: 'Stock supprimee'});
} 