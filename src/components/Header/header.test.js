import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
	it('It should render without errors', () => {
		const component = shallow(<Header />);
	});
});
