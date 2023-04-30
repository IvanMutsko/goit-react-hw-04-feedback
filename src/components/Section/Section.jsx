import PropTypes from 'prop-types';
import { SectionElement, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionElement>
      <Title>{title}</Title>
      {children}
    </SectionElement>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
