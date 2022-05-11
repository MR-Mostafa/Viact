import type { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
	return (
		<div className="mw-[1200px] mx-[auto] px-[1rem]">
			<div role="alert" className="dir[ltr] mt-[2rem]">
				<div className="p-[2rem] br-[0.5rem] bg-[#f1d8d5] bxs-[0px_1px_2px_1px_#bdbdbd]">
					<p className="fw-[bold] pb-[0.5rem]">Something went wrong:</p>
					<br />
					<pre>{error.message}</pre>
					<br />
					<pre>{error.stack}</pre>
				</div>
			</div>
		</div>
	);
};

export default ErrorFallback;
