import { Navigate } from 'react-router-dom';
import AnalyticsPageHeader from '@/components/AnalyticsPageHeader';
import Stats from '@/components/Stats';
import useMetricsContext from '@/hooks/useMetricsContext';

function Analytics() {
	const { headcount, turnover } = useMetricsContext();

	if (headcount.length === 0 || turnover.length === 0) {
		return <Navigate to="/login" />;
	}

	return (
		<main className="page bg-zinc-50">
			<AnalyticsPageHeader />
			<Stats />
		</main>
	);
}

export default Analytics;
