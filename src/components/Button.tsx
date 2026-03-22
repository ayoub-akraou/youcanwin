import arrow from "../assets/arrow-right.svg";

export default function Button({ text, className }) {
	return (
		<button
			className={`flex gap-2 ml-3 cursor-pointer active:scale-95 px-5 py-2.5 bg-linear-90 from-[#16A34A] to-[#0B6B3A] shadow-md text-white rounded-md ${className}`}>
			<p>{text}</p>
			<img src={arrow} alt="right arrow" />
		</button>
	);
}
