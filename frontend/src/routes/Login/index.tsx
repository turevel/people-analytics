import About from '@/components/About';
import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';

function Login() {
	return (
		<main className="page relative grid place-items-center bg-white sm:bg-zinc-50 lg:grid-cols-2">
			<div className="absolute left-5 top-4">
				<Logo />
			</div>
			<LoginForm />
			<About />
		</main>
	);
}

export default Login;
