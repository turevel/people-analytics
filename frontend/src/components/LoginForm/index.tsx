import LoginFormHeader from './LoginFormHeader';
import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/analytics');
	};

	return (
		<div className="grid place-items-center pb-12 pt-[80px]">
			<div className="flex max-w-sm flex-col gap-2 rounded-xl bg-white p-7 sm:shadow">
				<LoginFormHeader />

				<form
					className="flex flex-col gap-2"
					onSubmit={handleSubmit}
				>
					<LoginFormInput />
					<LoginFormSubmit />
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
