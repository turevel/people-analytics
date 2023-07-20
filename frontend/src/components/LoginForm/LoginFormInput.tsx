interface Props {
  onChange: (value: string) => void;
  value: string;
}

function LoginFormInput({ onChange, value }: Props) {
	return (
		<input
			className="w-full rounded-3xl border-2 border-transparent bg-zinc-100 px-3 py-3 text-sm outline-none focus:border-indigo-500"
			onChange={({ target }) => onChange(target.value)}
			placeholder="Digite seu email..."
			required
			type="email"
			value={value}
		/>
	);
}

export default LoginFormInput;
