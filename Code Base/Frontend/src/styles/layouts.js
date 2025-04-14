import styled from "styled-components";

// Main layout container with flex layout and some modern styling
export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    background: linear-gradient(135deg, #ab03ff, #00ffff, #ff66cc);
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

// Inner layout used for sections, will apply padding and width constraints
export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

// Optional: You can also add specific layout for content
export const ContentLayout = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

// Style for headers to ensure consistency across the app
export const PageHeader = styled.h1`
    color: var(--primary-color);
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
`;

// Style for general paragraphs with a soft grey color
export const Paragraph = styled.p`
    color: #6c757d;
    text-align: center;
    font-size: 1rem;
`;
