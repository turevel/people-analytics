import About from '@/components/About';
import LoginForm from '@/components/LoginForm';
import LoginLogo from '@/components/Logo';

function Login() {
	return (
		<main className="page relative grid place-items-center bg-white lg:grid-cols-2 lg:bg-zinc-50">
			<LoginLogo />
			<LoginForm />
			<About />
		</main>
	);
}

export default Login;
