import LineChart from './LineChart';
import useMetricsContext from '@/hooks/useMetricsContext';

function Headcount() {
	const { headcount } = useMetricsContext();

	return (
		<div className="w-full max-w-xl bg-white px-[22px] md:rounded-lg md:p-7 md:shadow">
			<header className="mb-5 space-y-1 text-sm">
				<h2 className="mb-2 text-xl font-bold text-indigo-500">
          Evolução de Headcount
				</h2>
				<h4 className="font-semibold">O que é headcount?</h4>
				<p>
          O headcount é o número de funcionários ativos em uma empresa em um
          período de tempo.
				</p>
			</header>

			<LineChart
				data={headcount}
				axisBottomLabel="Período"
				axisLeftLabel="Funcionários ativos"
			/>
		</div>
	);
}

export default Headcount;
