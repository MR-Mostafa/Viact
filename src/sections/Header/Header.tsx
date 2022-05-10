import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as GithubIcon } from '~images/github.svg';
import ViactImg from '~images/viact.png';

const Header = () => {
	return (
		<header className="d-[flex] fld-[row] ai-[center] js-[space-between] pb-[0.5rem] mb-[1rem] bdb-[1px_dotted_#ffffff1a]">
			<h1 className="c-[#ffffffcc] fw-[500] fs-[1.5rem]">
				<Link to="/" className="d-[flex] ai-[center] c-[#fff]">
					<img src={ViactImg} alt="Viact Logo" className="w-[30px] mr-[0.5rem]" />
					Viact
				</Link>
			</h1>

			<div className="navbar d-[flex] ai-[center] @.navbar_a$fs-[1.4rem] @.navbar_a:hover$c-[#fff] @.navbar_a$c-[#B6B7B7] @.navbar_a$trs-[color_0.15s_ease-in-out] @.navbar_a$mx-[0.5rem] @.navbar_.active$c-[#00bff3] @.navbar_.active$pe-[none]">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/learn">Learn More</NavLink>
			</div>

			<a
				href="https://github.com/MR-Mostafa/Viact"
				target="_blank"
				rel="noopener noreferrer"
				className="github fs-[2rem] h-[1em] @.github:hover_svg$fill-[#fff]"
			>
				<GithubIcon className="icon fill-[#B6B7B7] trs-[fill_0.15s_ease-in-out]" />
			</a>
		</header>
	);
};

export default Header;
