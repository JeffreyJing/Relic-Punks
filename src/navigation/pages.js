import { Routes, Route } from 'react-router-dom';
import ClaimableSearch from '../pages/claimable-search';
import Home from '../pages/home';

const Pages = () => {
	return (
		<>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='claimable-search' element={<ClaimableSearch />} />
			</Routes>
		</>
	);
}

export default Pages;