const path = require('path');
const fs = require('fs');
const srcDir = path.resolve(__dirname);

if (!srcDir) throw new Error('srcDir is not defined');

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
resetContentFile('/src/assets/styles/styles.rtl.scss', `${styleRtl.trim()}\n`);
resetContentFile('/src/assets/styles/styles.scss', `${style.trim()}\n`);
resetContentFile('/src/App.tsx', `${App.trim()}\n`);
resetContentFile('/README.md', '## Hello World!\n');

// Delete File
deleteFile('/src/assets/images/github.svg');
deleteFile('/src/assets/images/minus.svg');
deleteFile('/src/assets/images/plus.svg');
deleteFile('/src/assets/images/viact.psd');
deleteFile('/LICENSE');

// Delete Dir
deleteDir('/src/components/Button');
deleteDir('/src/components/Counter');
deleteDir('/src/pages/About');
deleteDir('/src/pages/Home');
deleteDir('/src/pages/LearnMore');
deleteDir('/src/sections/Footer');
deleteDir('/src/sections/Header');
