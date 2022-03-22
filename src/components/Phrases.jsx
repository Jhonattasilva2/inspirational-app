import styled from "styled-components";
import { useEffect, useState } from "react";

function Phrases() {
  const [quote, setQuote] = useState("arroz");
  const [person, setPerson] = useState("banana");
  const [counter, setCounter] = useState(15)

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setQuote(data[0].q);
        setPerson(data[0].a);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Frases>{quote}</Frases>
      <Autor>{person}</Autor>
      <Counter>{counter}</Counter>
    </>
  );
}

const Frases = styled.h2`
  color: white;
  font-size: 25px;
  text-align: center;
`;

const Autor = styled.p`
  color: #fff;
  font-size: 20px;
`;

const Counter = styled.span`
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: #FFF;
`

export default Phrases;
