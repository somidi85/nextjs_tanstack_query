"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const ToDos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userToDos"],
    queryFn: async () => {
      const { data } = await axios.get("/api/todo");
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    // have component fetch data for todos

    // if loading show loading mess
    // if error, show error
    //render todos

    <div className="flex flex-col gap-2">
      <ul>
        {data.map((todo: TodoType) => (
          <li key={todo.id}>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{todo.title}</h3>
              <p className="text-lg">{todo.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
