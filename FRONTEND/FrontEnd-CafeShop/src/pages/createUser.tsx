import clsx from "clsx"
import logoMain from '../assets/cafe-logo-1.png'

const createUser = () => {
    return (
        <div className="bg-gray-50 flex justify-center items-center py-5 px-28">
            <main className="w-full max-w-[600px]">
                <nav className="w-14">
                    <img src={logoMain} alt="Café Shop" />
                </nav>
                <header className="flex flex-col gap-4 w-full max-w-[350px]">
                    <h1 className="font-sans text-4xl font-bold text-gray-800">
                        Cadastro de novo Usuário
                    </h1>
                    <br />
                </header>
                <form
                    action=""
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            className="font-sans font-semibold text-base text-gray-800"
                            htmlFor="email"
                        >
                            E-mail
                        </label>
                        <input
                            className={clsx('px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-orange-500', {
                                // 'border-red': errors.email,
                                // 'focus:border-red': errors.email
                            })}
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                        // {...register('email')}
                        />
                        {/* {errors.email && (<span className="text-red text-sm">{errors.email?.message}</span>)} */}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="font-sans font-semibold text-base text-gray-800"
                            htmlFor="password"
                        >
                            Senha
                        </label>
                        <input
                            className={clsx('px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-orange-500')}
                            type="password"
                            id="password"
                            placeholder="Insira uma senha"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="font-sans font-semibold text-base text-gray-800"
                            htmlFor="confirmPassword"
                        >
                            Confirme sua senha
                        </label>
                        <input
                            className={clsx('px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-orange-500')}
                            type="password"
                            id="confirmPassword"
                            placeholder="Digite novamente a senha"
                        />

                        <footer className="flex flex-col gap-8 mt-5">
                            <button
                                className="bg-orange-500 text-white font-bold py-4 rounded outline-none hover:bg-orange-400 hover:ring-1 hover:ring-orange-500 focus:ring-2 focus:ring-orange-400"
                            >
                                Cadastrar
                            </button>
                        </footer>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default createUser