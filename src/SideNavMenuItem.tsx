import React from 'react';
import { PageHeaderKind, pageHeaders } from './page-headers';
import styled from 'styled-components';
import { createScrollSpyFactory } from './packages';

const useScrollSpy = createScrollSpyFactory({
  root: document,
});

export const MenuItem = ({ headerKey }: { headerKey: PageHeaderKind }) => {
  const { title, slug, level } = pageHeaders[headerKey];
  const isActive = !!useScrollSpy(`#${slug}`);
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const header = document.querySelector(`#${slug}`);
    header?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Item
      onClick={onLinkClick}
      href={`#${slug}`}
      level={level}
      isActive={isActive}
    >
      {title}
    </Item>
  );
};

const Item = styled.a<{ level: number; isActive: boolean }>`
  display: inline-block;
  margin: 0.4rem;
  list-style-type: none;
  margin-left: ${(props) => props.level}rem;
  font-weight: ${(props) => (props.isActive ? 'bold' : '')};
  color: ${(props) => (props.isActive ? '#fff' : '#eee')};
  text-decoration: none;
`;
