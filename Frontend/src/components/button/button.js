import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, bg, bPad, color, bRad, gradient }) {
    return (
        <ButtonStyled
            style={{
                background: gradient ? `linear-gradient(to right, ${bg[0]}, ${bg[1]})` : bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }}
            onClick={onClick}
        >
            {icon}
            {name}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: 'Nunito', sans-serif;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 12px 24px;
    border-radius: ${({ bRad }) => bRad || '8px'};
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    &:hover {
        background-color: ${({ bg }) => bg && lightenColor(bg, 10)};
        transform: translateY(-4px);
        box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: ${({ bg }) => bg && darkenColor(bg, 10)};
        transform: translateY(2px);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background-color: rgba(255, 255, 255, 0.2);
        transition: all 0.4s ease-in-out;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
    }
`;

const lightenColor = (color, percentage) => {
    let colorHex = color.replace('#', '');
    let r = parseInt(colorHex.substring(0, 2), 16);
    let g = parseInt(colorHex.substring(2, 4), 16);
    let b = parseInt(colorHex.substring(4, 6), 16);

    r = Math.min(255, r + (255 - r) * (percentage / 100));
    g = Math.min(255, g + (255 - g) * (percentage / 100));
    b = Math.min(255, b + (255 - b) * (percentage / 100));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const darkenColor = (color, percentage) => {
    let colorHex = color.replace('#', '');
    let r = parseInt(colorHex.substring(0, 2), 16);
    let g = parseInt(colorHex.substring(2, 4), 16);
    let b = parseInt(colorHex.substring(4, 6), 16);

    r = Math.max(0, r - r * (percentage / 100));
    g = Math.max(0, g - g * (percentage / 100));
    b = Math.max(0, b - b * (percentage / 100));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export default Button;
