import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import {
    bitcoin, book, calender, card, circle, clothing, comment, dollar,
    food, freelance, medical, money, piggy, stocks, takeaway, trash, tv,
    users, yt
} from '../../utils/icons';
import Button from '../button/button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () => {
        switch (category) {
            case 'salary': return money;
            case 'freelancing': return freelance;
            case 'investments': return stocks;
            case 'stocks': return users;
            case 'bitcoin': return bitcoin;
            case 'bank': return card;
            case 'youtube': return yt;
            case 'other': return piggy;
            default: return circle;
        }
    };

    const expenseCatIcon = () => {
        switch (category) {
            case 'education': return book;
            case 'groceries': return food;
            case 'health': return medical;
            case 'subscriptions': return tv;
            case 'takeaways': return takeaway;
            case 'clothing': return clothing;
            case 'travelling': return freelance;
            case 'other': return circle;
            default: return circle;
        }
    };

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar}<span>₹{amount}</span></p>
                        <p>{calender}<span>{dateFormat(date)}</span></p>
                        {description && (
                            <p>{comment}<span>{description}</span></p>
                        )}
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    }

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 15px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i {
            font-size: 2.4rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .3rem;

        h5 {
            font-size: 1.3rem;
            font-weight: 600;
            padding-left: 2rem;
            position: relative;
            color: var(--primary-color);
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;

            .text {
                display: flex;
                flex-direction: column;
                gap: 0.6rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.9;
                    font-size: 0.95rem;
                    span {
                        font-weight: 500;
                    }
                }
            }

            .btn-con {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 1rem;
            }
        }
    }
`;

export default IncomeItem;
