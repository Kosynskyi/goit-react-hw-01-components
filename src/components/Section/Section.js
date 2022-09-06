import PropTypes from 'prop-types';
import { SectionStyle, Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Container>
        <div>{title && <Title>{title}</Title>}</div>
        {children}
      </Container>
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
