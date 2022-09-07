import PropTypes from 'prop-types';
import { SectionStyle, Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
