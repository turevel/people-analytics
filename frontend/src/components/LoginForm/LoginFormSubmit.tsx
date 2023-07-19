import { IcRoundArrowForward } from '../_icons/IcRoundArrowForward';

function LoginFormSubmit() {
	return (
		<button
			className="flex cursor-pointer items-center justify-center gap-1 rounded-3xl bg-indigo-500 p-3 text-sm font-medium text-zinc-50 hover:bg-indigo-400"
			type="submit"
		>
      Acessar
			<IcRoundArrowForward className="text-lg" />
		</button>
	);
}

export default LoginFormSubmit;
