import { SVGProps } from 'react';

export function LogoutCircleArrow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 14 14"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M6.5 7h7m-2-2l2 2l-2 2"></path>
				<path d="M11.7 11.49a6.5 6.5 0 1 1 0-9"></path>
			</g>
		</svg>
	);
}
