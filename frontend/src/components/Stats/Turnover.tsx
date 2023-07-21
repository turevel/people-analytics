import LineChart from './LineChart';

const data = [
	{
		id: 1,
		data: [
			{ x: '01-2021', y: 5 },
			{ x: '02-2021', y: 7 },
			{ x: '03-2022', y: 12 },
			{ x: '04-2022', y: 11 },
			{ x: '05-2023', y: 10 },
			{ x: '06-2023', y: 13 },
			{ x: '07-2023', y: 14 },
			{ x: '08-2023', y: 13 },
			{ x: '09-2023', y: 15 },
			{ x: '10-2023', y: 15 },
			{ x: '11-2023', y: 17 },
			{ x: '12-2023', y: 17 },
		],
	},
];

function Turnover() {
	return (
		<div className="w-full max-w-xl bg-white px-[22px] sm:p-7 md:rounded-lg md:shadow">
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
				data={data}
				axisBottomLabel="Período"
				axisLeftLabel="Número de funcionários"
			/>
		</div>
	);
}

export default Turnover;
