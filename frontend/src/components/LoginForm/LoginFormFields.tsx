import LoginFormErrorMessage from './LoginFormErrorMessage';
import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidator from '@/helpers/emailValidator';
import useMetricsContext from '@/hooks/useMetricsContext';

function LoginFormFields() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const { getMetrics } = useMetricsContext();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const success = await getMetrics(email);
		if (success) navigate('/analytics');
		else setError(true);
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

			{error && <LoginFormErrorMessage />}
		</form>
	);
}

export default LoginFormFields;
