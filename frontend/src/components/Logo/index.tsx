import { Link } from 'react-router-dom';
import { IonMdAnalytics } from '@/components/_icons/IonMdAnalytics';

function Logo() {
	return (
		<Link
			to="/login"
			className="flex items-center text-xl font-bold"
		>
			<IonMdAnalytics className="mr-2 text-4xl text-indigo-500" />
			<span className="text-indigo-500">People</span>Analytics
		</Link>
	);
}

export default Logo;
