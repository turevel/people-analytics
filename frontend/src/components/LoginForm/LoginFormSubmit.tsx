import { IcRoundArrowForward } from '../_icons/IcRoundArrowForward';

interface Props {
  disabled: boolean;
}

function LoginFormSubmit({ disabled }: Props) {
	return (
		<button
			className="flex cursor-pointer items-center justify-center gap-1 rounded-3xl bg-indigo-500 p-3 text-sm font-medium text-zinc-50 hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-zinc-300"
			disabled={disabled}
			type="submit"
		>
      Acessar
			<IcRoundArrowForward className="text-lg" />
		</button>
	);
}

export default LoginFormSubmit;
