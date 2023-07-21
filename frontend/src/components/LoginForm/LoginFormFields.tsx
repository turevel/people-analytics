import LoginFormInput from './LoginFormInput';
import LoginFormSubmit from './LoginFormSubmit';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidator from '@/helpers/emailValidator';
import useMetricsContext from '@/hooks/useMetricsContext';

function LoginFormFields() {
	const { headcount, getMetrics, turnover } = useMetricsContext();
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await getMetrics(email);
	};

	useEffect(() => {
		if (headcount.length > 0 || turnover.length > 0) {
			navigate('/analytics');
		}
	}, [headcount, turnover]);

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
