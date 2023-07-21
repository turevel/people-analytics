import { Serie, ResponsiveLine } from '@nivo/line';

interface Props {
  data: Serie[];
  axisLeftLabel: string;
  axisBottomLabel: string;
}

function LineChart({ axisBottomLabel, axisLeftLabel, data }: Props) {
	return (
		<div className="h-[320px]">
			<ResponsiveLine
				animate={true}
				axisLeft={{
					legend: axisLeftLabel,
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				axisBottom={{
					legend: axisBottomLabel,
					legendOffset: 50,
					legendPosition: 'middle',
					tickRotation: -30,
				}}
				colors={['#6366f1']}
				data={data}
				enableArea={true}
				lineWidth={2}
				margin={{ bottom: 60, left: 50, top: 20, right: 10 }}
				pointBorderColor="#6366f1"
				pointBorderWidth={2}
				pointColor="#fff"
				pointSize={14}
				theme={{
					axis: {
						legend: {
							text: {
								fontWeight: 'bold',
							},
						},
					},
				}}
				useMesh={true}
			/>
		</div>
	);
}

export default LineChart;
