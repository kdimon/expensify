import React from 'react';
import {shallow} from 'enzyme';
import ExpensesTotal from '../../components/ExpensesTotal';

const noExpense = [];

const expense = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}];

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 0
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: 0
}];

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpensesTotal />);
});

test('should return 0 if no expenses', () => {
    expect(wrapper.instance().getExpensesTotal(noExpense)).toBe(0);
});

test('should correctly add up a single expense', () => {
    expect(wrapper.instance().getExpensesTotal(expenses)).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    expect(wrapper.instance().getExpensesTotal(expenses)).toBe(114195);
});