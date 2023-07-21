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
				data={data}
				lineWidth={2}
				animate={true}
				useMesh={true}
				margin={{ bottom: 60, left: 50, top: 20, right: 10 }}
				pointSize={12}
				axisLeft={{
					legend: axisLeftLabel,
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				axisBottom={{
					legend: axisBottomLabel,
					legendOffset: 50,
					legendPosition: 'middle',
					tickRotation: -20,
				}}
				enableArea={true}
			/>
		</div>
	);
}

export default LineChart;
