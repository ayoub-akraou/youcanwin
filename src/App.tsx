import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SolutionSection from "./components/SolutionSection";

function App() {
	return (
		<>
			<NavBar />
			<div className="container px-4">
				<Header />
				<SolutionSection />
			</div>
		</>
	);
}

export default App;
