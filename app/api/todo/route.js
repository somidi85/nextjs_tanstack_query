import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function POST(req) {
  const { title, description, status } = await req.json();
  await connectMongoDB();
  await Todo.create({ title, description, status });
  return NextResponse.json(
    { message: "Todo created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const todos = await Todo.find({});
  return NextResponse.json(todos);
}

export async function DELETE(req) {
  const { id } = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Todo deleted successfully" },
    { status: 200 }
  );
}
