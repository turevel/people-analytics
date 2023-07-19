import LoginForm from '@/components/LoginForm/LoginForm';
import LoginTemplate from '@/components/LoginTemplate/LoginTemplate';

function Login() {
	return (
		<main className="bg-zinc-50 page grid place-items-center grid-cols-2">
			<LoginForm />
			<LoginTemplate />
		</main>
	);
}

export default Login;
