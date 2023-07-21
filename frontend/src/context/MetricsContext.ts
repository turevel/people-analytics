import { createContext } from 'react';
import Metrics from '@/interfaces/IMetrics';

interface Context {
  getMetrics: (email: string) => Promise<void>;
  loading: boolean
  headcount: Metrics | null;
  turnover: Metrics | null;
}

const MetricsContext = createContext({} as Context);

export default MetricsContext;
