import { LogoutCircleArrow } from '../_icons/i';
import useMetricsContext from '@/hooks/useMetricsContext';

function Logout() {
	const { logout } = useMetricsContext();

	return (
		<button className="text-sm font-medium flex items-center gap-2 bg-indigo-500 text-zinc-50 px-3 py-2 rounded hover:bg-indigo-400" onClick={logout} type="button">
			<LogoutCircleArrow className="text-base" />
      Sair
		</button>
	);
}

export default Logout;
