import PropTypes from 'prop-types';
import './Input.css';

export default function Input({
  className,
  type,
  placeholder,
  dataTestid,
  onChange,
}) {
  return (
    <label htmlFor={ type }>
      <input
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
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  dataTestid: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
