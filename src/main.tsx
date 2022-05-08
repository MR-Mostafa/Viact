import React from 'react';
import ReactDOM from 'react-dom/client';

import 'uno.css';

import '~styles/styles.rtl.scss';
import '~styles/styles.scss';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
