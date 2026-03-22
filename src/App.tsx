import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SolutionSection from "./components/SolutionSection";
import CustomerJourneySection from "./components/CustomerJourneySection";

function App() {
	return (
		<>
			<NavBar />
			<div className="container px-4">
				<Header />
				<SolutionSection />
				<CustomerJourneySection />
			</div>
		</>
	);
}

export default App;
