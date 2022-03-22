import styled from 'styled-components'
import Div from './components/Div';



function App() {
  return (
    <Container>
      <Div/>
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export default App;
