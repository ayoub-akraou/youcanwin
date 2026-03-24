type CheckProps = {
	color?: string;
};

export default function Check({ color }: CheckProps) {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.16667 10.8335L7.50001 14.1668L15.8333 5.8335"
				stroke={color ?? "#16A34A"}
				strokeWidth="1.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
