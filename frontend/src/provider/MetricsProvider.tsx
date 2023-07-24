import { Serie } from '@nivo/line';
import { ReactNode, useMemo, useState } from 'react';
import MetricsContext from '@/context/MetricsContext';
import useRequest from '@/hooks/useRequest';
import { getHeadcount, getTurnover } from '@/services/metricsRequests';

function MetricsProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const [headcount, setHeadcount] = useState<Serie[]>([]);
	const [turnover, setTurnover] = useState<Serie[]>([]);
	const request = useRequest();

	const value = useMemo(() => ({
		getMetrics: async (email: string) => {
			setLoading(true);
			const headcountData = await request(() => getHeadcount(email)) || [];
			const turnoverData = await request(() => getTurnover(email)) || [];
			setHeadcount(headcountData);
			setTurnover(turnoverData);
			setLoading(false);
			return headcountData.length > 0 && turnoverData.length > 0;
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
