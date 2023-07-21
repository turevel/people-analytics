import { Serie } from '@nivo/line';
import { ReactNode, useMemo, useState } from 'react';
import MetricsContext from '@/context/MetricsContext';
import useRequest from '@/hooks/useRequest';
import { getHeadcount, getTurnover } from '@/services/metricsRequests';

function MetricsProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const [headcount, setHeadcount] = useState<Serie[]>([]);
	const [turnover, setTurnover] = useState<Serie[]>([]);
	const { request } = useRequest();

	const getMetrics = async (email: string) => {
		setLoading(true);
		setHeadcount(await request(() => getHeadcount(email)) || []);
		setTurnover(await request(() => getTurnover(email)) || []);
		setLoading(false);
	};

	const logout = () => {
		setHeadcount([]);
		setTurnover([]);
	};

	const value = useMemo(() => ({
		getMetrics,
		headcount,
		loading,
		turnover,
		logout,
	}), [headcount, loading, turnover]);

	return (
		<MetricsContext.Provider value={value}>
			{children}
		</MetricsContext.Provider>
	);
}

export default MetricsProvider;
