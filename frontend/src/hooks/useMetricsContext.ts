import { useContext } from 'react';
import MetricsContext from '@/context/MetricsContext';

function useMetricsContext() {
	return useContext(MetricsContext);
}

export default useMetricsContext;
