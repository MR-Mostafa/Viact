import { Route, Routes } from 'react-router-dom';

import ViactImg from '~images/viact.png';
import About from '~pages/About';
import Home from '~pages/Home';
import LearnMore from '~pages/LearnMore';
import Footer from '~sections/Footer';
import Header from '~sections/Header';

function App(): JSX.Element {
	return (
		<div className="maw-[1200px] p-[1rem] mx-[auto] min-h[100vh] d-[flex] fld-[column]">
			<Header />

			<main className="py-[1.5rem]">
				<div className="pb-[3.5rem]">
					<img src={ViactImg} alt="viact logo" className="viact-logo d-[block] mw-[23vw] min-w-[300px] h-[auto] m-[auto]" />
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/learn" element={<LearnMore />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
