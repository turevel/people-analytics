import About from '@/components/About';
import LoginForm from '@/components/LoginForm';
import LogoAbsolutePosition from '@/components/LogoAbsolutePosition';

function Login() {
	return (
		<main className="page relative grid place-items-center bg-white sm:bg-zinc-50 lg:grid-cols-2">
			<LogoAbsolutePosition />
			<LoginForm />
			<About />
		</main>
	);
}

export default Login;
