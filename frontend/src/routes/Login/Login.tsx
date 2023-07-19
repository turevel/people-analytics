import LoginForm from '@/components/LoginForm/LoginForm';
import LoginInterfaceSection from '@/components/LoginInterfaceSection/LoginInterfaceSection';
import LoginLogo from '@/components/LoginLogo/LoginLogo';

function Login() {
	return (
		<main className="bg-white sm:bg-zinc-50 page grid place-items-center grid-rows-2-2 relative sm:grid-cols-2">
			<LoginLogo />
			<LoginForm />
			<LoginInterfaceSection />
		</main>
	);
}

export default Login;
