import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { PageHeaderKind, pageHeaders } from './page-headers';

export const PageBlocks = () => {
  return (
    <FlexBox column gap={'2rem'}>
      <Block headerKey={'title'} />
      <Block headerKey={'installation'} />
      <Block headerKey={'props'} />
      <Block headerKey={'theme'} />
      <Block headerKey={'cssProp'} />
      <Block headerKey={'media'} />
      <Block headerKey={'conclusion'} />
    </FlexBox>
  );
};

const Block = ({ headerKey }: { headerKey: PageHeaderKind }) => {
  const { title, slug, level } = pageHeaders[headerKey];
  const component = `h${level}`;

  return (
    <>
      {/* @ts-expect-error */}
      <Div as={component} id={slug}>
        {title}
      </Div>
      <StyledBox height={'1200px'}>Paragraph</StyledBox>
    </>
  );
};

const StyledBox = styled(FlexBox).attrs({ as: 'section', center: true })`
  background-color: #f1f1f1;
`;

const Div = styled.div``;
