import About from '@/components/About';
import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';

function Login() {
	return (
		<main className="page relative grid place-items-center bg-white lg:grid-cols-2 sm:bg-zinc-50">
			<Logo />
			<LoginForm />
			<About />
		</main>
	);
}

export default Login;
