import styled from "styled-components";
import { useEffect, useState } from "react";

function Phrases() {
  const [quote, setQuote] = useState(
    "Quality means doing it right when no one is looking"
  );
  const [person, setPerson] = useState("Henry Ford");
  const [seconds, setSeconds] = useState(15);

  function fetchApi() {
    fetch("https://zenquotes.io/api/random")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setQuote(data[0].q);
        setPerson(data[0].a);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (seconds >= 0) {
      const TimerInt = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => {
        clearInterval(TimerInt);
      };
    } else {
      setSeconds(15);
      fetchApi();
    }
  }, [seconds]);

  return (
    <>
      <Frases>"{quote}"</Frases>
      <Autor>{person}</Autor>
      <Counter>{seconds}</Counter>
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
  color: #fff;
`;

export default Phrases;
