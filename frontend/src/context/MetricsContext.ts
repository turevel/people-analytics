import { Serie } from '@nivo/line';
import { createContext } from 'react';

interface Context {
  getMetrics: (email: string) => Promise<boolean>;
  loading: boolean
  headcount: Serie[];
  turnover: Serie[];
  logout: () => void;
}

const MetricsContext = createContext({} as Context);

export default MetricsContext;
