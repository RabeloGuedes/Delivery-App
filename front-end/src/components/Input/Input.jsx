import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

export default function Input({
  name,
  label,
  className,
  type,
  placeholder,
  dataTestid,
  onChange,
}) {
  return (
    <StyledInput htmlFor={ type }>
      <h4>{ label }</h4>
      <input
        name={ name }
        className={ className }
        id={ type }
        type={ type }
        placeholder={ placeholder }
        data-testid={ dataTestid }
        onChange={ onChange }
      />
    </StyledInput>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  dataTestid: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
