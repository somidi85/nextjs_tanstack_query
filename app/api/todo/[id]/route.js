import connectMongoDB from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, status } = await request.json();
  await connectMongoDB();
  await Todo.findByIdAndUpdate(id, { title, description, status });
  return NextResponse.json(
    { message: "Todo updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const todo = await Todo.findOne({ _id: id });
  return NextResponse.json(todo, { status: 200 });
}
