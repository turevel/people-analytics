import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/analytics');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Digite seu email..."
			/>

			<input
				type="submit"
				value="Entrar"
			/>
		</form>
	);
}

export default LoginForm;
