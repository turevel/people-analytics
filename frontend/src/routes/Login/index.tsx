import LoginForm from '@/components/LoginForm';
import LoginInterfaceSection from '@/components/LoginInterfaceSection/LoginInterfaceSection';
import LoginLogo from '@/components/Logo';

function Login() {
	return (
		<main className="page relative grid place-items-center bg-white lg:grid-cols-2 lg:bg-zinc-50">
			<LoginLogo />
			<LoginForm />
			<LoginInterfaceSection />
		</main>
	);
}

export default Login;
