import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #222260; /* Dark Blue */
        --secondary-color: #ab03ff; /* Purple Gradient */
        --accent-color: #ff66cc; /* Pink Accent */
        --button-color: #42AD00; /* Green Button */
        --error-color: #FF0000;
        --bg-gradient-start: #00ffff;
        --bg-gradient-end: #9999ff;

        /* Credit and Debit Colors */
        --credit-color: #42AD00; /* Green for Credit */
        --debit-color: #FF0000;  /* Red for Debit */
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        background: linear-gradient(45deg, var(--bg-gradient-start), var(--bg-gradient-end));
        color: rgba(34, 34, 96, 0.7);
        overflow: hidden;
        transition: all 0.3s ease;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        font-weight: bold;
    }

    /* Common Button Styles */
    button {
        padding: 15px 30px;
        background-color: var(--button-color);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #3d9b00; /* Slightly darker green */
        }
    }

    /* Input Styles */
    input, textarea {
        width: 100%;
        padding: clamp(12px, 2vw, 16px);
        margin: 12px 0;
        border-radius: 10px;
        border: 1px solid #ced4da;
        font-size: 16px;
        box-sizing: border-box;
    }

    /* Error Styling */
    .error {
        color: var(--error-color);
        animation: shake 0.5s ease-in-out;
    }

    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(10px);
        }
        50% {
            transform: translateX(-10px);
        }
        75% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0);
        }
    }

    /* General Styling for Links */
    a {
        text-decoration: none;
        color: var(--primary-color);
        transition: color 0.3s ease;

        &:hover {
            color: var(--accent-color);
        }
    }

    /* Credit and Debit Specific Styles */
    .credit {
        color: var(--credit-color); /* Green for credit */
    }

    .debit {
        color: var(--debit-color); /* Red for debit */
    }
`;