import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import 'uno.css';

import ErrorFallback from '~sections/ErrorFallback';
import '~styles/styles.rtl.scss';
import '~styles/styles.scss';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
);
