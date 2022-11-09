import React from 'react';
import Proptypes from 'prop-types';

export default function AdminForm() {
  return (
    <div className="register">
      <div>
        <label htmlFor="name">
          Nome:
          {' '}
          <input
            id="name"
            data-testid="admin_manage__input-name"
            type="text"
            // onChange={ handleChange }
            value="name"
            // value={ name }
          />
        </label>
        <label htmlFor="email">
          Email:
          {' '}
          <input
            id="email"
            data-testid="admin_manage__input-email"
            type="text"
            // onChange={ handleChange }
            value="email"
            // value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha:
          {' '}
          <input
            id="password"
            data-testid="admin_manage__input-password"
            type="password"
            // onChange={ handleChange }
            value="password"
            // value={ password }
          />
        </label>
        <select
          id="role"
          // onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          // disabled={ disabled }
          // onClick={ createUser }
        >
          CADASTRAR
        </button>
      </div>
      {/* <div data-testid="admin_manage__element-invalid-register">
        {messageError ? (
          <p>Campos inválidos!</p>
        ) : null}
      </div> */}
    </div>
  );
}

AdminForm.propTypes = {
  admin: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
