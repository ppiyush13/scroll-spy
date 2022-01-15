import styled from 'styled-components';
import { PageBlocks } from './PageBlocks';
import { SideNav } from './SideNav';

function App() {
  return (
    <Main>
      <SideNav />
      <PageBlocks />
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(200px, 30%) auto;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

export default App;
