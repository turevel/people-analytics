import LoginFormFields from './LoginFormFields';
import LoginFormHeader from './LoginFormHeader';

function LoginForm() {
	return (
		<div className="grid place-items-center pb-16 pt-24">
			<div className="flex max-w-sm flex-col gap-2 rounded-xl bg-white p-5 sm:p-7 sm:shadow">
				<LoginFormHeader />
				<LoginFormFields />
			</div>
		</div>
	);
}

export default LoginForm;
