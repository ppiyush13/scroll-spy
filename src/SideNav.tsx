import styled from 'styled-components';
import { MenuItem } from './SideNavMenuItem';

export const SideNav = () => {
  return (
    <Aside>
      <nav>
        <ul>
          <MenuItem headerKey={'title'} />
          <MenuItem headerKey={'installation'} />
          <MenuItem headerKey={'props'} />
          <MenuItem headerKey={'theme'} />
          <MenuItem headerKey={'cssProp'} />
          <MenuItem headerKey={'media'} />
          <MenuItem headerKey={'conclusion'} />
        </ul>
      </nav>
    </Aside>
  );
};

const Aside = styled.aside`
  position: sticky;
  top: 2rem;
  height: calc(100vh - 4rem);
  background-color: #0057d9;
  color: #fff;

  ul {
    padding: 0;
    padding: 2rem 1rem;
  }
`;
