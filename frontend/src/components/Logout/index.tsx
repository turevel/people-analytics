import { LogoutCircleArrow } from '../_icons/LogoutCircleArrow';
import useMetricsContext from '@/hooks/useMetricsContext';

function Logout() {
	const { logout } = useMetricsContext();

	return (
		<button
			className="flex items-center gap-2 rounded bg-indigo-500 px-3 py-2 text-sm font-medium text-zinc-50 hover:bg-indigo-400"
			onClick={logout}
			type="button"
		>
			<LogoutCircleArrow className="text-base" />
      Sair
		</button>
	);
}

export default Logout;
