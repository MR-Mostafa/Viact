import { useState } from 'react';

import { ReactComponent as MinusIcon } from '~images/minus.svg';
import { ReactComponent as PlusIcon } from '~images/plus.svg';

interface ICounterProps {
	start: number;
}

const Counter = ({ start = 0 }: ICounterProps) => {
	const [count, setCount] = useState(start);

	const handleIncrement = () => setCount(count + 1);

	const handleDecrement = () => setCount(count - 1);

	return (
		<div className="counter d-[flex] js-[center] ai-[center] @.counter_button$fs-[50px] @.counter_button:active$op-[0.8] @.counter_svg$trs-[fill_0.15s_ease-in-out] us-[none]">
			<button className="btn-plus bg-[transparent] @.btn-plus:hover_svg$fill-[#5393ff] h-[50px]" onClick={handleIncrement}>
				<PlusIcon className="icon fill-[#2979ff]" />
			</button>

			<p className="fs-[1.7rem] w-[80px] ta-[center] c-[#fff]">{count}</p>

			<button className="btn-minus bg-[transparent] @.btn-minus:hover_svg$fill-[#b2102f] h-[50px]" onClick={handleDecrement}>
				<MinusIcon className="icon fill-[#ff1744]" />
			</button>
		</div>
	);
};

export default Counter;
