import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import Bannerdetails from './containers/bannerdetails1/bannerdetails1';
import CounterDetails from "./containers/counterdetails1/counterdetails1";

describe('Banner Details', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Bannerdetails debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Counter Details', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CounterDetails debug />);
    //console.log(component);
    expect(component).toMatchSnapshot();
  });
});