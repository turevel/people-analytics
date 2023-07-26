import { Serie } from '@nivo/line';
import { ReactNode, useMemo, useState } from 'react';
import MetricsContext from '@/context/MetricsContext';
import useRequest from '@/hooks/useRequest';
import { requestMetrics } from '@/services/requests';

function MetricsProvider({ children }: { children: ReactNode }) {
	const [headcount, setHeadcount] = useState<Serie[]>([]);
	const [turnover, setTurnover] = useState<Serie[]>([]);
	const { request, loading } = useRequest();

	const value = useMemo(() => ({
		getMetrics: async (email: string) => {
			const metrics = await request(() => requestMetrics(email));
			setHeadcount(metrics.headcount || []);
			setTurnover(metrics.turnover || []);
			return metrics !== null;
		},

		logout: () => {
			setHeadcount([]);
			setTurnover([]);
		},

		headcount,
		loading,
		turnover,
	}), [headcount, loading, turnover, request]);

	return (
		<MetricsContext.Provider value={value}>
			{children}
		</MetricsContext.Provider>
	);
}

export default MetricsProvider;
