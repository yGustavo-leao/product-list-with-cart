'use client'

import { Container, Title } from "./home/Home.styled";
import data from '../data/data.json'
import { useState } from "react";
import { DataType } from "@/@types/DataType";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState<DataType[]>(data)
  return (
    <Container>
      <Title>Desserts</Title>
      <Card data={list} />
      <Cart />
    </Container>
  );
}
