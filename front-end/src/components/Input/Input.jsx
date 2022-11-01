import PropTypes from 'prop-types';
import './Input.css';

export default function Input({
  name,
  className,
  type,
  placeholder,
  dataTestid,
  onChange,
}) {
  return (
    <label htmlFor={ type }>
      <input
        name={ name }
        className={ className }
        id={ type }
        type={ type }
        placeholder={ placeholder }
        data-testid={ dataTestid }
        onChange={ onChange }
      />
    </label>
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
