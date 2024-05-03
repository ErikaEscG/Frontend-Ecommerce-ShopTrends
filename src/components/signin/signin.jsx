import React from 'react'
import { useForm } from 'react-hook-form'
import './signin.css'

function SigninForm () {
  const { register } = useForm()

  return (
    <>
      <div className='d-flex justify-content-center '>
        <div className='d-inline-block component-login'>
          <p className='h2 text-center text-danger'>Inicia sesión</p>

          <form>
            <ul>
              <span>
                <input
                  placeholder='Correo electronico'
                  type='email'
                  name='email'
                  className='input-width'
                />
              </span>
            </ul>
            <ul>

              <input
                placeholder='Contraseña'
                type='Password'
                name='Password'
                className='input-width'
              />

            </ul>
            <ul />

            <ul className='d-flex justify-content-center'>
              <button
                type='submit'
                className='btn btn-danger'
              >
                Registrate
              </button>
            </ul>

            <ul>
              <p className='text-center text-danger'>Has olvidado la contraseña?</p>
            </ul>

            <ul className='d-flex justify-content-center'>
              <button
                type='submit'
                className='btn btn-danger bg-subtle text-danger custom-hover'
              >
                Crear cuenta nueva
              </button>
            </ul>

          </form>

        </div>
      </div>
    </>
  )
}

export default SigninForm
