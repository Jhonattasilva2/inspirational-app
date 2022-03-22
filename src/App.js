import styled from 'styled-components'
import Div from './components/Div';
import video1 from '../src/img/video.mp4'



function App() {
  return (
    <Container>
    <Video autoPlay loop muted>
      <Source src={video1} type='video/mp4'/>
    </Video>
    <Div />
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

const Video = styled.video`
position: absolute;
width: 100%;
left: 50%;
top: 50%;
height: 100%;
object-fit: cover;
transform: translate(-50%, -50%);
z-index: -1;
`

const Source = styled.source`

`

export default App;
