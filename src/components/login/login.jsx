import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'

function LoginForm () {
  const { register } = useForm()

  return (
    <>
      <div className='d-flex justify-content-center '>
        <div className='d-inline-block component-login'>
          <p className='h2 text-center text-danger'>Crea tu cuenta</p>

          <form>

            <ul className='d-flex justify-content-Around'>
              <div className='input-name'>
                <input
                  placeholder='Nombre(s)'
                  type='text'
                  name='Nombre'
                />
              </div>
              <div>
                <input
                  placeholder='Apellidos'
                  type='text'
                  name='Apellidos'
                />
              </div>
            </ul>
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
            <ul>

              <input
                placeholder='Ingresa nuevamente tu contraseña'
                type='Password'
                name='Password'
                className='input-width'
              />

            </ul>
            <ul className='d-flex justify-content-center'>

              <button
                type='submit'
                className='btn btn-danger'
              >
                Registrate
              </button>

            </ul>
          </form>

        </div>
      </div>
    </>
  )
}

export default LoginForm
