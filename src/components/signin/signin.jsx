import { useForm } from 'react-hook-form'
import './signin.css'
import { useState, useEffect } from 'react'

function SigninForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

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
          <p className='h2 text-center text-danger'>Inicia sesión</p>

          <form onSubmit={onSubmit}>
            <ul>
              <span>
                <input
                  placeholder='Correo electronico'
                  type='email'
                  name='email'
                  value={email}
                  className='input-width input-border'
                  onChange={onChange}
                />
              </span>
            </ul>
            <ul>

              <input
                placeholder='Contraseña'
                type='password'
                name='password'
                value={password}
                className='input-width input-border'
                onChange={onChange}
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
