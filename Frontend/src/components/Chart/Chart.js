import React from 'react';
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

// line graph
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

// Register the elements from Chart.js
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);  // Format date for the x-axis
        }),

        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),  // Extracting income data
                backgroundColor: 'rgba(76, 175, 80, 0.2)',  // Lighter green for income
                borderColor: 'rgba(76, 175, 80, 1)',  // Darker green for income border
                tension: 0.3,  // Slightly more curved line
                fill: true,  // Fill the area under the line
                borderWidth: 2,
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),  // Extracting expense data
                backgroundColor: 'rgba(244, 67, 54, 0.2)',  // Lighter red for expenses
                borderColor: 'rgba(244, 67, 54, 1)',  // Darker red for expenses border
                tension: 0.3,  // Slightly more curved line
                fill: true,  // Fill the area under the line
                borderWidth: 2,
            },
        ],
    };

    // Custom options to improve the chart's appearance and behavior
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: "'Roboto', sans-serif",
                    },
                },
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 1,
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ₹${tooltipItem.raw.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12,
                        family: "'Roboto', sans-serif",
                    },
                },
                title: {
                    display: true,
                    text: 'Date',
                    font: {
                        size: 14,
                        family: "'Roboto', sans-serif",
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 12,
                        family: "'Roboto', sans-serif",
                    },
                    callback: function(value) {
                        return `₹${value}`;  // Format y-axis values as currency
                    },
                },
                title: {
                    display: true,
                    text: 'Amount',
                    font: {
                        size: 14,
                        family: "'Roboto', sans-serif",
                    },
                },
            },
        },
    };

    return (
        <ChartStyled>
            <Line data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 400px;  // Fixed height for better layout control
    width: 100%;    // Ensure it takes full width
    max-width: 800px;  // Limit max width
`;

export default Chart;
