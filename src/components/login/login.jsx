import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './login.css'

function LoginForm () {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    password2: ''

  })

  const { nombre, apellidos, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='d-flex justify-content-center '>
        <div className='d-inline-block component-login'>
          <p className='h2 text-center text-danger'>Crea tu cuenta</p>

          <form onSubmit={onSubmit}>

            <ul className='d-flex justify-content-Around'>
              <div className='input-name'>
                <input
                  placeholder='Nombre(s)'
                  type='text'
                  name='nombre'
                  id='nombre'
                  className='input-border'
                  value={nombre}
                  onChange={onChange}
                />
              </div>
              <div>
                <input
                  placeholder='Apellidos'
                  type='text'
                  name='apellidos'
                  id='apellidos'
                  className='input-border'
                  value={apellidos}
                  onChange={onChange}
                />
              </div>
            </ul>
            <ul>
              <span>
                <input
                  placeholder='Correo electronico'
                  type='email'
                  name='email'
                  id='email'
                  className='input-width input-border'
                  value={email}
                  onChange={onChange}
                />
              </span>
            </ul>
            <ul>

              <input
                placeholder='Contraseña'
                type='Password'
                name='password'
                id='password'
                className='input-width input-border'
                value={password}
                onChange={onChange}
              />

            </ul>
            <ul>

              <input
                placeholder='Ingresa nuevamente tu contraseña'
                type='Password'
                name='password2'
                className='input-width input-border'
                value={password2}
                onChange={onChange}
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
