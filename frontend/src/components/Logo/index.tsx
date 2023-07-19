import { IonMdAnalytics } from '@/components/_icons/IonMdAnalytics';

function LoginLogo() {
	return (
		<h1 className="absolute top-4 left-5 font-bold text-xl flex items-center">
			<IonMdAnalytics className="text-4xl text-indigo-500 mr-2"/>
			<span className="text-indigo-500">People</span>Analytics
		</h1>
	);
}

export default LoginLogo;
