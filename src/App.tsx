import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SolutionSection from "./components/SolutionSection";
import CustomerJourneySection from "./components/CustomerJourneySection";
import SalesToExperienceSection from "./components/SalesToExperienceSection";

function App() {
	return (
		<>
			<NavBar />
			<div className="container px-4">
				<Header />
				<SolutionSection />
				<CustomerJourneySection />
			</div>
			<SalesToExperienceSection />
		</>
	);
}

export default App;
