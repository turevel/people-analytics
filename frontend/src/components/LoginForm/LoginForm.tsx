
import { IcRoundArrowForward } from '../_icons/IcRoundArrowForward';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/analytics');
	};

	return (
		<div className="grid place-items-center pt-24 pb-16">
			<div className="flex flex-col gap-2 max-w-sm px-6 py-7 bg-white rounded-xl sm:shadow">
				<h2 className="text-indigo-500 font-bold text-xl">
				Entrar
				</h2>

				<p className="text-sm mb-2">
				Acesse suas métricas através do seu e-mail de colaborador!
				</p>

				<form
					className="flex flex-col gap-2"
					onSubmit={handleSubmit}
				>
					<input
						className="py-2.5 px-3 outline-none rounded-3xl text-sm border-2 border-transparent focus:border-indigo-500 w-full bg-zinc-100"
						placeholder="Digite seu email..."
						required
						type="email"
					/>

					<button
						className="p-2.5 bg-indigo-500 text-zinc-50 rounded-3xl hover:bg-indigo-400 text-sm font-medium cursor-pointer flex gap-1 items-center justify-center"
						type="submit"
					>
						Acessar
						<IcRoundArrowForward className="text-lg"/>
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
