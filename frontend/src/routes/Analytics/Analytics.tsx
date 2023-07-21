import { Navigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import Stats from '@/components/Stats';
import useMetricsContext from '@/hooks/useMetricsContext';

function Analytics() {
	const { headcount, turnover } = useMetricsContext();

	if (!headcount && !turnover) return <Navigate to="/login" />;

	return (
		<main className="page bg-zinc-50">
			<Logo />
			<Stats />
		</main>
	);
}

export default Analytics;
