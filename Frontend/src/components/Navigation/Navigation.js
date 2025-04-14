import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/icons';
import { menuItems } from '../../utils/menuItems';
import { AuthContext } from '../../context/AuthContext';

function Navigation({ active, setActive }) {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    };

    return (
        <NavStyled>
            {/* User container */}
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <p>SpendSmart</p>
                </div>
            </div>

            {/* Menu items */}
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>

            <div className="bottom-nav">
                <Button onClick={handleSignOut}>
                    {signout} Log Out
                </Button>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.9);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #ffffff;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.1);
        }

        .text {
            p {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.2rem;
            }
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                background: #f4f4f4;
                border-radius: 10px;
                transform: translateX(10px);
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        display: flex;
        justify-content: center;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: #ff4b5c; /* Button color */
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #ff2a45;
    }

    &:active {
        background-color: #e03d4e;
        transform: scale(0.98);
    }

    svg {
        margin-right: 0.5rem;
    }
`;

export default Navigation;
