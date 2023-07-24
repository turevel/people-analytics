import notFound from '@/assets/images/not-found.svg';
import LogoAbsolutePosition from '@/components/LogoAbsolutePosition';

function NotFound() {
	return (
		<main className="page relative flex flex-col items-center justify-center bg-zinc-50">
			<LogoAbsolutePosition />

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
