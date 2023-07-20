import LoginFormHeader from './LoginFormHeader';
import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidator from '@/helpers/emailValidator';

function LoginForm() {
	const [email, setEmail] = useState('');
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
					<LoginFormInput value={email} onChange={setEmail} />
					<LoginFormSubmit disabled={!emailValidator(email)} />
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
