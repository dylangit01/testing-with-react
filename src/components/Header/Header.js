import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo-dd.png';


const Header = () => {
	return (
		<header>
			<div className='wrapper'>
				<div className='logo'>
					<img src={Logo} alt="logo" />
				</div>
			</div>
		</header>
	)
}

export default Header
