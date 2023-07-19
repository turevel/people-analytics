import notFound from '@/assets/images/not-found.svg';
import Logo from '@/components/Logo';

function NotFound() {
	return (
		<main className="page relative flex flex-col items-center justify-center bg-zinc-50">
			<Logo />
			<img
				src={notFound}
				width={300}
			/>
			<h1 className="text-sm font-medium">
        A página que você procura não está aqui!
			</h1>
		</main>
	);
}

export default NotFound;
