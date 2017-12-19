import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

let startLogin,
    wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should correctly render LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on google button click', () => {
    wrapper.find('#google').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on facebook button click', () => {
    wrapper.find('#facebook').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on github button click', () => {
    wrapper.find('#github').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on twitter button click', () => {
    wrapper.find('#twitter').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});