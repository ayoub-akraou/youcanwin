import type { ReactNode } from "react";
import settings from "../assets/settings.svg";
import qrCode from "../assets/qr-code.svg";
import group from "../assets/group.svg";
import controllers from "../assets/controllers.svg";
import analytics from "../assets/analytics.svg";
import gift from "../assets/gift.svg";
import clock from "../assets/clock.svg";
import download from "../assets/download.svg";
import liste from "../assets/liste.svg";
import earth from "../assets/earth.svg";
import cloud from "../assets/cloud.svg";
import Button from "./Button";

export default function BackofficeSection() {
	return (
		<section className="bg-[#F5F5F5]">
			<div className="container px-4 py-20">
				<div className="mx-auto mb-4 w-fit rounded-full bg-[#DCFCE7] px-4 py-1.5 text-sm font-medium text-[#0B6B3A]">
					<img className="mr-2 inline-block" src={settings} alt="settings icon" />
					Backoffice tout-en-un
				</div>
				<h1 className="mb-4 text-center text-4xl font-bold">Gerez tout depuis une interface unique</h1>
				<p className="mb-12 text-center text-lg text-[#475569]">
					Notre backoffice intuitif vous permet de creer, configurer et piloter vos campagnes en toute autonomie
				</p>

				<ul className="mb-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					<Card title="Generateur QR Codes" description="Creez et telechargez vos QR codes uniques en masse">
						<img src={qrCode} alt="qr code icon" />
					</Card>
					<Card
						title="CRM Participants"
						description="Collectez et gerez vos participants avec segmentation avancee">
						<img src={group} alt="group icon" />
					</Card>
					<Card
						title="Configuration jeux"
						description="Parametrez entierement vos jeux: regles, lots, duree, visuels">
						<img src={controllers} alt="controllers icon" />
					</Card>
					<Card title="Analytics temps reel" description="Suivez vos KPIs: scans, conversions, engagement, ROI">
						<img src={analytics} alt="analytics icon" />
					</Card>
					<Card title="Gestion des lots" description="Definissez vos recompenses et gerez les tirages au sort">
						<img src={gift} alt="gift icon" />
					</Card>
					<Card title="Notifications" description="Envoyez des push, emails et SMS a vos participants">
						<img src={clock} alt="clock icon" />
					</Card>
					<Card title="Export donnees" description="Telechargez vos donnees en CSV, Excel ou via API">
						<img src={download} alt="download icon" />
					</Card>
					<Card title="Multi-campagnes" description="Gerez plusieurs campagnes simultanement">
						<img src={liste} alt="list icon" />
					</Card>
				</ul>
				<Button text="Demander un acces au backoffice" className="mx-auto" />
			</div>

			<ul className="flex flex-wrap justify-between gap-6 bg-white px-8 py-7 md:px-16 lg:flex-nowrap lg:px-32">
				<Card className="flex-1 border-none text-center" title="Utilisateurs" description="De 1K a illimite">
					<img src={group} alt="group icon" />
				</Card>
				<Card className="flex-1 border-none text-center" title="QR Codes" description="Volume adapte">
					<img src={qrCode} alt="qr-code icon" />
				</Card>
				<Card className="flex-1 border-none text-center" title="Couverture" description="Local a mondial">
					<img src={earth} alt="earth icon" />
				</Card>
				<Card className="flex-1 border-none text-center" title="Albums" description="Standard ou custom">
					<img src={liste} alt="list icon" />
				</Card>
				<Card className="flex-1 border-none text-center" title="Infrastructure" description="Cloud ou On-Premise">
					<img src={cloud} alt="cloud icon" />
				</Card>
			</ul>
		</section>
	);
}

type CardProps = {
	title: string;
	description: string;
	className?: string;
	children: ReactNode;
};

function Card({ title, description, className = "", children }: CardProps) {
	return (
		<li className={`rounded-xl border border-[#E2E8F0] bg-white p-6 ${className}`}>
			<div className="icon mb-4 w-fit rounded-lg bg-[#F0FDF4] p-2.5">{children}</div>
			<h4 className="mb-2 text-base font-semibold">{title}</h4>
			<p className="description text-sm text-[#475569]">{description}</p>
		</li>
	);
}
