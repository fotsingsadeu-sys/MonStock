import {NextResponse} from "next/server";

let todos = [];

export async function GET(){
    return NextResponse.json(todos);
}

export async function POST(request:Request){
    const body = await request.json();

    const newTodo ={
        id: Date.now(),
        title: body.title,
        completed: false,
    };
    
    todos.push(newTodo);
    return NextResponse.json(newtodo);
}

export async function PUT(request:Request){
    const body = await request.json();

    todos = todos.map((todo) =>
        todo.id === body.id ? { ...todo, completed: !todo.completed }: todo,
);

return NextResponse.json({ message:" Todo mise a jour"});
}

 export async function DELETE(request:Request) {
    const body = await request.json();

    todos = todos.filter((todo) => todo.id !== body.id);

    return NextResponse.json ({ message: 'Todo supprimee'});
} 