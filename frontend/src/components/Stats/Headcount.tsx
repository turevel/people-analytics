import LineChart from './LineChart';

const data = [
	{
		id: 1,
		label: 'Lucas',
		color: '#1e90ff',
		hidden: false,
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

function Headcount() {
	return (
		<div className="w-full max-w-xl rounded-lg bg-white p-7 md:shadow">
			<header className="mb-5 space-y-1 text-sm">
				<h2 className="mb-2 text-xl font-bold text-indigo-500">
          Evolução de Headcount
				</h2>
				<h4 className="font-semibold">O que é headcount?</h4>
				<p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ex
          labore a iure natus quis quasi quas minima nostrum totam!
				</p>
			</header>

			<LineChart
				data={data}
				axisBottomLabel="Período"
				axisLeftLabel="Funcionários ativos"
			/>
		</div>
	);
}

export default Headcount;
