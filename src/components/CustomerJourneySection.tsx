import cart from "../assets/cart.svg";
import qrCode from "../assets/qr-code.svg";
import collection from "../assets/liste.svg";
import puzzle from "../assets/puzzle.svg";
import gift from "../assets/red-gift.png";

export default function CustomerJourneySection() {
	return (
		<section className="px-4 py-20">
			<h1 className="text-4xl font-bold text-center mb-4">Un parcours client simple et engageant</h1>
			<p className="text-lg text-[#475569] mb-16 text-center">De l'achat du produit à la récompense, en 5 étapes</p>
			<ul className="flex justify-between gap-8 px-6">
				<CustomerListItem number="1" title="Achat produit" description="Le client achète votre produit en magasin">
					<img src={cart} alt="cart icon" />
				</CustomerListItem>
				<CustomerListItem
					number="2"
					title="Scan QR Code"
					description="Il scanne le code sur
               l'emballage">
					<img src={qrCode} alt="qr-code icon" />
				</CustomerListItem>

				<CustomerListItem number="3" title="Déblocage carte" description="Une carte digitale est débloquée">
					<img src={collection} alt="collection icon" />
				</CustomerListItem>
				<CustomerListItem
					number="4"
					numberStyle={{ backgroundColor: "#DC2626" }}
					title="Collection"
					description="Il complète sa collection"
					descriptionStyle={{ textWrap: "nowrap" }}
					iconStyle={{ borderColor: "#FECACA" }}>
					<img src={puzzle} alt="puzzle icon" />
				</CustomerListItem>
				<CustomerListItem
					number="5"
					numberStyle={{ backgroundColor: "#DC2626" }}
					title="Récompenses"
					description="Participe aux tirages"
					iconStyle={{ borderColor: "#FECACA" }}
					descriptionStyle={{ textWrap: "nowrap" }}>
					<img src={gift} alt="puzzle icon" />
				</CustomerListItem>
			</ul>
		</section>
	);
}

function CustomerListItem({
	children,
	title,
	description,
	number,
	numberStyle,
	iconStyle,
	titleStyle,
	descriptionStyle,
}) {
	return (
		<li className="flex flex-col items-center relative flex-1">
			<span
				style={numberStyle}
				className="number rounded-full bg-[#16A34A] text-white font-bold text-xs w-7 h-7 flex justify-center items-center leading-0 absolute top-0 left-full -translate-1/2">
				{number}
			</span>
			<div style={iconStyle} className="icon p-5 rounded-[1.6rem] border-2 border-[#BBF7D0] mb-4">
				{children}
			</div>
			<h4 style={titleStyle} className="font-semibold text-base">
				{title}
			</h4>
			<p style={descriptionStyle} className="description text-sm text-center text-[#475569]">
				{description}
			</p>
		</li>
	);
}
