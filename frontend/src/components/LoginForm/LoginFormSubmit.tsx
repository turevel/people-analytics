import { IcRoundArrowForward } from '../_icons/IcRoundArrowForward';
import { LineMdLoadingTwotoneLoop } from '../_icons/LineMdLoadingTwotoneLoop';
import useMetricsContext from '@/hooks/useMetricsContext';

interface Props {
  disabled: boolean;
}

function LoginFormSubmit({ disabled }: Props) {
	const { loading } = useMetricsContext();

	return (
		<button
			className="flex cursor-pointer items-center justify-center gap-1 rounded-3xl bg-indigo-500 p-3 text-sm font-medium text-zinc-50 hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-30"
			disabled={disabled}
			type="submit"
		>
			{loading ? (
				<>
					<LineMdLoadingTwotoneLoop className="text-xl" />
          Aguarde enquanto processamos...
				</>
			) : (
				<>
          Acessar
					<IcRoundArrowForward className="text-lg" />
				</>
			)}
		</button>
	);
}

export default LoginFormSubmit;
