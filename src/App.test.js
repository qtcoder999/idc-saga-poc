import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { sinon } from "sinon";

Enzyme.configure({ adapter: new Adapter() });

import Banner from './components/banner/banner'
import Counter from './components/counter1/counter1'

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

//Test Cases For button.
describe('Counter Details',()=>
{
    it('Counter Details is defined',() =>
    {
        expect(CounterDetails).toBeDefined();
    });
    it('Button should render correctly',()=>
    {
        const tree = shallow(
            <CounterDetails />
        );
        expect(tree).toMatchSnapshot();
    });
    // it('Button is clickable in Search Header Component',()=>
    // {
    //     const onButtonClick = sinon.spy();

    //     const tree = shallow(
    //         <CounterDetails/>
    //     )
    //     // const instance = tree.instance();
    //     // const goSpy = sinon.spy(instance,'moc');
    //     // instance.forceUpdate();
    //         //  sinon.assert.calledOnce(goSpy);
    //      tree.simulate('click');
    //      expect(onButtonClick).toBeCalled();
       
    // })
});