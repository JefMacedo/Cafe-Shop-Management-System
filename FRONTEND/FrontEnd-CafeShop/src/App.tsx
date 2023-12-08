import { EyeSlash } from '@phosphor-icons/react'
import * as zod from 'zod'
import { Eye } from '@phosphor-icons/react/dist/ssr'
import logoMain from './assets/cafe-logo-1.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
  email: zod.string().email('Digite um e-mail válido'),
  password: zod.string().nonempty('Digite a sua senha')
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

export function App() {
  const [inputPasswordType, setInputPasswordType] = useState<PasswordType>('password')

  const handleTogglePasswordType = (type: PasswordType) => {
    switch (type) {
      case 'password':
        setInputPasswordType('text')
        return
      case 'text':
      default:
        setInputPasswordType('password')
        return
    }
  }

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema)
  })

  const { register, handleSubmit, formState, reset } = loginForm

  const { errors } = formState

  const handleLoginSubmit = (data: NewLoginFormData) => {
    console.log(data)
    reset()
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-gray-50">
      <div>
        <div className="py-5 px-28">
          <img src={logoMain} alt="Café Shop" className="w-15" />
          <main className="flex flex-col mt-20 gap-10 w-full max-w-[384px]">
            <header className="flex flex-col gap-4 w-full max-w-[350px]">
              <h1 className="font-sans text-4xl font-bold text-gray-800">
                Acessar a plataforma
              </h1>
              <p className="font-sans font-normal text-base text-gray-600">
                Faça o login ou registre-se para começar a usar.
              </p>
            </header>
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleLoginSubmit)}
            >
              <div className="flex flex-col gap-2">
                <label
                  className="font-sans font-semibold text-sm text-gray-800"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className={clsx('px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-orange-500', {
                    'border-red': errors.email,
                    'focus:border-red': errors.email
                  })}
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  {...register('email')}
                />
                {errors.email && (<span className="text-red text-sm">{errors.email?.message}</span>)}
              </div>

              <div className="flex flex-col gap-2 relative">
                <label
                  className="font-sans flex justify-between font-semibold text-sm text-gray-800"
                  htmlFor="password"
                >
                  Senha
                  <a
                    className="text-orange-500 hover:text-orange-400 hover:underline"
                    href="#"
                  >
                    Esqueceu a senha?
                  </a>
                </label>
                <input
                  className={clsx('px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-orange-500', {
                    'border-red': errors.password,
                    'focus:border-red': errors.password
                  })}
                  type={inputPasswordType}
                  id="password"
                  placeholder="Digite sua senha"
                  {...register('password')}
                />
                <button
                  className="absolute right-4 top-11 text-gray-400"
                  type="button"
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  {inputPasswordType === 'password' ? <EyeSlash /> : <Eye />}
                </button>
                {errors.password && (<span className="text-red text-sm">{errors.password?.message}</span>)}
              </div>

              <footer className="flex flex-col gap-8">
                <button
                  className="bg-orange-500 text-white font-bold py-4 rounded outline-none hover:bg-orange-400 hover:ring-1 hover:ring-orange-500 focus:ring-2 focus:ring-orange-400"
                >
                  Entrar
                </button>
                <span className="text-gray-600">
                  Ainda não tem uma conta?
                  <a
                    className="text-orange-500 px-1 hover:text-orange-400 hover:underline"
                    href="#"
                  >
                    Inscreva-se
                  </a>
                </span>
              </footer>
            </form>
          </main>
        </div>
      </div>
      <div className="bg-img-coffee bg-cover grid grid-cols-2 " />
    </div>
  )
}
