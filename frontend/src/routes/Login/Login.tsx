import LoginForm from '@/components/LoginForm/LoginForm';
import LoginLogo from '@/components/LoginLogo/LoginLogo';
import LoginTemplate from '@/components/LoginTemplate/LoginTemplate';

function Login() {
	return (
		<main className="bg-white sm:bg-zinc-50 page grid place-items-center grid-rows-2-2 relative sm:grid-cols-2">
			<LoginLogo />
			<LoginForm />
			<LoginTemplate />
		</main>
	);
}

export default Login;
