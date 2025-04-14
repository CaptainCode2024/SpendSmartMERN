import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../button/button';
import { plus } from '../../utils/icons';

function Form() {
    const { addIncome, getIncomes, error, setError } = useGlobalContext();

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}

            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Income Title"
                    onChange={handleInput('title')}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="input-control">
                <input
                    type="number"
                    value={amount}
                    name="amount"
                    placeholder="Amount (₹)"
                    onChange={handleInput('amount')}
                    min="0"
                    step="0.01"
                    required
                />
            </div>

            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date });
                    }}
                    required
                />
            </div>

            <div className="selects input-control">
                <select
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                    required
                >
                    <option value="" disabled>Select Category</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="input-control">
                <textarea
                    name="description"
                    value={description}
                    placeholder="Add a reference or note..."
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                />
            </div>

            <div className="submit-btn">
                <Button
                    name="Add Income"
                    icon={plus}
                    bPad=".8rem 1.6rem"
                    bRad="30px"
                    bg="var(--color-accent)"
                    color="#fff"
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .error {
        color: red;
        font-weight: 500;
        text-align: center;
        background: rgba(255, 0, 0, 0.05);
        padding: 0.75rem;
        border-radius: 8px;
    }

    input,
    textarea,
    select {
        font-family: inherit;
        font-size: 1rem;
        outline: none;
        border: 2px solid #fff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        transition: border 0.3s ease;

        &:focus {
            border-color: var(--color-accent);
        }

        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }

    .input-control input {
        width: 100%;
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            width: 100%;
            color: rgba(34, 34, 96, 0.6);

            &:focus,
            &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

            &:hover {
                background: var(--color-green) !important;
                transform: translateY(-2px);
            }

            transition: all 0.3s ease;
        }
    }
`;

export default Form;
