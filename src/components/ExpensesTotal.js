import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

export class ExpensesTotal extends React.Component {
    constructor() {
        super();
        this.getExpensesTotal = this.getExpensesTotal.bind(this);
    }

    getExpensesTotal(expenses) {
        if(expenses.length === 1) {
            return expenses[0].amount;
        }else {
            return expenses
                .map(expense => {
                    return expense.amount;
                })
                .reduce((total, amount) => {
                    return total + amount;
                })
            ;
        }
    }

    render() {
        return (
            <div>
                {this.props.expenses.length === 0 ? <p>No expenses</p> : <p>Total expenses: {numeral(this.getExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}</p>}
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(MapStateToProps)(ExpensesTotal);