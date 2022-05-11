const path = require('path');
const fs = require('fs');
const srcDir = path.resolve(__dirname, 'src');

if (!srcDir) return;

const styleRtl = `
/**
 * @description:
 *		Global RTL styles
 *		You can use this file to change your style automatically from ltr to rtl.
 *
 * @rules:
 *		{see https://rtlcss.com/learn/}
 *
 * @example:
 *		1) @import 'bootstrap';
 *			this will import bootstrap styles with rtl support.
 *			.ps-3 { padding-left: 1rem!important;} ==>  .ps-3 { padding-right: 1rem!important;}
 *			.text-end {text-align: right;} ==> this will change the text-align to left in rtl mode.
 *
*/
`;

const style = `
/**
 * Global styles
*/
@import './utils/utilities';
`;

const App = `
function App(): JSX.Element {
	return (
		<div className="maw-[1200px] p-[1rem] mx-[auto] min-h[100vh] d-[flex] fld-[column]">
			<h1>Hello World!</h1>
		</div>
	);
}

export default App;
`;

const resetContentFile = async (dir, content) => {
	if (!dir || !content) return;

	try {
		await fs.writeFileSync(`${srcDir}${dir}`, content.toString(), 'utf-8');
	} catch (error) {
		console.trace(error);
	}
};

const deleteFile = async (dir) => {
	if (!dir) return;

	try {
		await fs.unlinkSync(`${srcDir}${dir}`);
	} catch (error) {
		console.trace(error);
	}
};

const deleteDir = async (dir) => {
	if (!dir) return;

	try {
		await fs.rmSync(`${srcDir}${dir}`, { recursive: true, force: true });
	} catch (error) {
		console.trace(error);
	}
};

// Styles
resetContentFile('/assets/styles/styles.rtl.scss', `${styleRtl.trim()}\n`);
resetContentFile('/assets/styles/styles.scss', `${style.trim()}\n`);
resetContentFile('/App.tsx', `${App.trim()}\n`);

// Delete File
deleteFile('/assets/images/github.svg');
deleteFile('/assets/images/minus.svg');
deleteFile('/assets/images/plus.svg');
deleteFile('/assets/images/viact.png');
deleteFile('/assets/images/viact.psd');

// Delete Dir
deleteDir('/components/Counter');
deleteDir('/pages/About');
deleteDir('/pages/Home');
deleteDir('/pages/LearnMore');
deleteDir('/sections/Footer');
deleteDir('/sections/Header');
