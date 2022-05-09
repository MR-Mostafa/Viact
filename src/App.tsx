import Counter from '~components/Counter';
import { ReactComponent as GithubIcon } from '~images/github.svg';
import ViactImg from '~images/viact.png';

function App(): JSX.Element {
	return (
		<div className="maw-[1200px] p-[1rem] mx-[auto]">
			<header className="d-[flex] fld-[row] ai-[center] js-[space-between] pb-[0.5rem] mb-[1rem] bdb-[1px_dotted_#ffffff1a]">
				<h1 className="c-[#ffffffcc] fw-[500]">Viact</h1>

				<a
					href="https://github.com/MR-Mostafa/Viact"
					target="_blank"
					rel="noopener noreferrer"
					className="d-[inline-block] fs-[2.5rem] h-[1em]"
				>
					<GithubIcon className="icon fill-[rgb(41,182,246)]" />
				</a>
			</header>

			<main className="pt-[2rem]">
				<img src={ViactImg} alt="viact logo" className="d-[block] mw-[30vw] min-w-[300px] h-[auto] m-[auto]" />

				<Counter start={0} />
				<p>
					<abbr title="Vite + React">Viact</abbr> is a starter template for React TypeScript that uses Vitejs, which supports RTL for
					specific styles, proxy fetching API (to fix CORS errors) and a simple mock REST API server.
				</p>
			</main>
		</div>
	);
}

export default App;
