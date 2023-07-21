import Headcount from './Headcount';
import Turnover from './Turnover';

function Stats() {
	return (
		<div className="page flex flex-col items-center justify-center gap-5 bg-white pb-10 pt-20 md:bg-zinc-50 md:px-10 lg:px-20 xl:flex-row">
			<Headcount />
			<Turnover />
		</div>
	);
}

export default Stats;
