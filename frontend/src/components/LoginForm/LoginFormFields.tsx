import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidator from '@/helpers/emailValidator';

function LoginFormFields() {
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/analytics');
	};

	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={handleSubmit}
		>
			<LoginFormInput
				value={email}
				onChange={setEmail}
			/>

			<LoginFormSubmit disabled={!emailValidator(email)} />
		</form>
	);
}

export default LoginFormFields;
