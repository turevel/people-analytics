import Logo from '../Logo';
import Logout from '../Logout';

function AnalyticsPageHeader() {
	return (
		<header className="absolute left-0 right-0 top-0 flex flex-col items-center justify-between gap-3 bg-zinc-50 px-5 py-4 sm:flex-row sm:bg-transparent">
			<Logo />
			<Logout />
		</header>
	);
}

export default AnalyticsPageHeader;
