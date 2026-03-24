import type { CSSProperties, ReactNode } from "react";
import cart from "../assets/cart.svg";
import qrCode from "../assets/qr-code.svg";
import collection from "../assets/liste.svg";
import puzzle from "../assets/puzzle.svg";
import gift from "../assets/red-gift.png";

export default function CustomerJourneySection() {
	return (
		<section className="px-4 py-20">
			<h1 className="mb-4 text-center text-4xl font-bold">Un parcours client simple et engageant</h1>
			<p className="mb-16 text-center text-lg text-[#475569]">De l'achat du produit a la recompense, en 5 etapes</p>
			<ul className="grid gap-8 px-6 md:grid-cols-2 xl:grid-cols-5">
				<CustomerListItem number="1" title="Achat produit" description="Le client achete votre produit en magasin">
					<img src={cart} alt="cart icon" />
				</CustomerListItem>
				<CustomerListItem number="2" title="Scan QR Code" description="Il scanne le code sur l'emballage">
					<img src={qrCode} alt="qr-code icon" />
				</CustomerListItem>
				<CustomerListItem number="3" title="Deblocage carte" description="Une carte digitale est debloquee">
					<img src={collection} alt="collection icon" />
				</CustomerListItem>
				<CustomerListItem
					number="4"
					numberStyle={{ backgroundColor: "#DC2626" }}
					title="Collection"
					description="Il complete sa collection"
					descriptionStyle={{ textWrap: "nowrap" }}
					iconStyle={{ borderColor: "#FECACA" }}>
					<img src={puzzle} alt="puzzle icon" />
				</CustomerListItem>
				<CustomerListItem
					number="5"
					numberStyle={{ backgroundColor: "#DC2626" }}
					title="Recompenses"
					description="Participe aux tirages"
					iconStyle={{ borderColor: "#FECACA" }}
					descriptionStyle={{ textWrap: "nowrap" }}>
					<img src={gift} alt="gift icon" />
				</CustomerListItem>
			</ul>
		</section>
	);
}

type CustomerListItemProps = {
	children: ReactNode;
	title: string;
	description: string;
	number: string;
	numberStyle?: CSSProperties;
	iconStyle?: CSSProperties;
	titleStyle?: CSSProperties;
	descriptionStyle?: CSSProperties;
};

function CustomerListItem({
	children,
	title,
	description,
	number,
	numberStyle,
	iconStyle,
	titleStyle,
	descriptionStyle,
}: CustomerListItemProps) {
	return (
		<li className="relative flex flex-1 flex-col items-center">
			<span
				style={numberStyle}
				className="number absolute left-full top-0 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#16A34A] text-xs font-bold leading-none text-white">
				{number}
			</span>
			<div style={iconStyle} className="icon mb-4 rounded-[1.6rem] border-2 border-[#BBF7D0] p-5">
				{children}
			</div>
			<h4 style={titleStyle} className="text-base font-semibold">
				{title}
			</h4>
			<p style={descriptionStyle} className="description text-center text-sm text-[#475569]">
				{description}
			</p>
		</li>
	);
}
