import { ReactNode, useMemo, useState } from 'react';
import MetricsContext from '@/context/MetricsContext';
import useRequest from '@/hooks/useRequest';
import Metrics from '@/interfaces/IMetrics';
import { getHeadcount, getTurnover } from '@/services/metricsRequests';

function MetricsProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const [headcount, setHeadcount] = useState<Metrics | null>(null);
	const [turnover, setTurnover] = useState<Metrics | null>(null);
	const { request } = useRequest();

	const getMetrics = async (email: string) => {
		setLoading(true);
		setHeadcount(await request(() => getHeadcount(email)));
		setTurnover(await request(() => getTurnover(email)));
		setLoading(false);
	};

	const value = useMemo(() => ({
		getMetrics,
		headcount,
		loading,
		turnover,
	}), [headcount, loading, turnover]);

	return (
		<MetricsContext.Provider value={value}>
			{children}
		</MetricsContext.Provider>
	);
}

export default MetricsProvider;
