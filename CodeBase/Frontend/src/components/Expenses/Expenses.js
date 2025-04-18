import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, [getExpenses]);

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">
                    Total Expense: <span>₹{totalExpenses()}</span>
                </h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.length ? expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteExpense}
                                />
                            );
                        }) : (
                            <p>No expenses recorded.</p>
                        )}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .total-expense {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .expense-content {
        display: flex;
        gap: 2rem;

        .expenses {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .form-container {
            flex: 0.4;
        }
    }
`;

export default Expenses;
