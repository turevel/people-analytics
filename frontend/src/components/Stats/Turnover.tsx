import LineChart from './LineChart';
import useMetricsContext from '@/hooks/useMetricsContext';

function Turnover() {
	const { turnover } = useMetricsContext();

	return (
		<div className="w-full max-w-xl bg-white px-[22px] md:rounded-lg md:p-7 md:shadow">
			<header className="mb-5 space-y-1 text-sm">
				<h2 className="mb-2 text-xl font-bold text-indigo-500">
          Evolução de Turnover
				</h2>
				<h4 className="font-semibold">O que é turnover?</h4>
				<p>
          O turnover é a taxa de rotatividade de funcionários, que mede o número
          de funcionários que saem de uma organização durante um período de
          tempo.
				</p>
			</header>

			<LineChart
				data={turnover}
				axisBottomLabel="Período"
				axisLeftLabel="Número de funcionários"
			/>
		</div>
	);
}

export default Turnover;
