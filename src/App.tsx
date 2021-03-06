import React from 'react';

import Header from './Components/Header';

interface IProps {
	title: string;
}

const App: React.FC<IProps> = ({ title }: IProps) => {
	const items: Array<string> = ['age', 'test', 'roror', 'kkh'];

	return (
		<>
			<Header title={title} />

			{items.map((item, key) => (
				<p key={key}>{item}</p>
			))}
		</>
	);
};

export default App;
