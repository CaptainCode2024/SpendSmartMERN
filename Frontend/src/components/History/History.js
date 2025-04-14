import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();
    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h2>Recent History</h2>

            {history.length === 0 ? (
                <p className="no-history">No recent transactions.</p>
            ) : (
                history.map((item) => {
                    const { _id, title, amount, type } = item;
                    const isExpense = type === 'expense';

                    return (
                        <div key={_id} className="history-item">
                            <p className={`title ${isExpense ? 'expense' : 'income'}`}>
                                {title}
                            </p>
                            <p className={`amount ${isExpense ? 'expense' : 'income'}`}>
                                {isExpense ? `-₹${amount <= 0 ? 0 : amount}` : `+₹${amount <= 0 ? 0 : amount}`}
                            </p>
                        </div>
                    );
                })
            )}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .no-history {
        text-align: center;
        font-style: italic;
        color: #999;
    }

    .history-item {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem 1.5rem;
        border-radius: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
        }
    }

    .title, .amount {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .expense {
        color: red;
    }

    .income {
        color: var(--color-green);
    }
`;

export default History;
