import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import AddTodoComp from "../components/AddTodoComp";

interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;
  const getTodos = async () => {
    try {
      const { data } = await axios<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography
        color="error"
        align="center"
        variant="h2"
        component={"h1"}
        mt={3}
      >
        {" "}
        To do App With Typescript
      </Typography>
      <AddTodoComp />
    </Container>
  );
};

export default Home;
