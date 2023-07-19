import { Line, Serie } from '@nivo/line';

const data: Serie[] = [
	{
		id: 1,
		label: 'Lucas',
		color: '#1e90ff',
		hidden: false,
		data: [
			{ x: '01-2021', y: 5},
			{ x: '02-2021', y: 7},
			{ x: '03-2022', y: 12},
			{ x: '04-2022', y: 11},
			{ x: '05-2023', y: 10},
			{ x: '06-2023', y: 13},
			{ x: '07-2023', y: 14},
			{ x: '08-2023', y: 13},
			{ x: '09-2023', y: 15},
			{ x: '10-2023', y: 15},
			{ x: '11-2023', y: 17},
			{ x: '12-2023', y: 17},
		],
	},
];

function AnalyticsStats() {
	return (
		<div>
			<h2>Evolução de headcount</h2>

			<div>
				<Line
					data={data}
					height={300}
					width={450}
					lineWidth={2}
					animate={true}
					useMesh={true}
					margin={{ bottom: 60, left: 60, top: 60, right: 60 }}
					pointSize={12}
					axisLeft={{ legend: 'funcionários ativos', legendOffset: -40, legendPosition: 'middle' }}
					axisBottom={{ legend: 'período', legendOffset: 50, legendPosition: 'middle', tickRotation: -20 }}
					enableArea={true}
				/>
			</div>

			<h2>Evolução de turnover</h2>
		</div>
	);
}

export default AnalyticsStats;
