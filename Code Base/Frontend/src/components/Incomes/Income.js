import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, []);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">
                    Total Income: <span>₹{totalIncome()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.length === 0 ? (
                            <p className="no-income-msg">No income records yet. Add one to get started!</p>
                        ) : (
                            incomes.map((income) => {
                                const { _id, title, amount, date, category, description, type } = income;
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
                                        deleteItem={deleteIncome}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;

    h1 {
        font-size: 2.2rem;
        color: var(--primary-color);
        text-align: center;
        margin-bottom: 1rem;
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem 2rem;
        margin: 1rem auto;
        font-size: 2rem;
        gap: .5rem;
        width: fit-content;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .income-content {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        flex-wrap: wrap;

        .form-container {
            flex: 1;
            min-width: 350px;
        }

        .incomes {
            flex: 2;
            min-width: 400px;
        }

        .no-income-msg {
            font-size: 1.2rem;
            color: var(--primary-color);
            background: #fff3f3;
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
        }
    }

    @media (max-width: 768px) {
        .income-content {
            flex-direction: column;
        }

        .total-income {
            font-size: 1.7rem;
            span {
                font-size: 2.2rem;
            }
        }
    }
`;

export default Income;
