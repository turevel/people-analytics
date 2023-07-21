import Logo from '../Logo';
import Logout from '../Logout';

function AnalyticsPageHeader() {
	return (
		<header className="flex flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row absolute top-0 left-0 right-0">
			<Logo />
			<Logout />
		</header>
	);
}

export default AnalyticsPageHeader;
