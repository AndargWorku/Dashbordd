
import './App.css';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import Maincomponet from './component/Maincomponet';

function App() {
  return (
    <Container>
      <Sidebar/>
      <Maincomponet/>
    </Container>
  );
}
const Container=styled.div`
display:flex;
height:97vh;
background:linear-gradient(to bottom right,white 0%%,#e6e64ff 70%);
border-radius:2rem;
@media screen and(min-width:320px) and(max-width:1080px){
flex-direction:column;
}
`
export default App;
