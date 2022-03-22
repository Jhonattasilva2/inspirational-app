import styled from "styled-components"
import Phrases from "./Phrases"

function Div() {
  return (
    <GlassDiv>
      <Phrases />
    </GlassDiv>
  )
}

const GlassDiv = styled.div`
width: 50%;
height: 40%;
background: rgba(255, 255, 255, 0.06);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.1px);
-webkit-backdrop-filter: blur(5.1px);
border: 1px solid rgba(255, 255, 255, 0.16);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
position: relative;
`

export default Div