import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './donut.css'

const Donut = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [n, setN] = useState(21); // Initialize n with a state variable
    const [rotation, setRotation] = useState(Math.PI); // Initialize rotation with counterclockwise direction

    useEffect(() => {
        const chartCanvas = chartRef.current;
        const ctx = chartCanvas.getContext('2d');

        if (chartInstance.current !== null) {
            // If there is a previous chart instance, destroy it
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Complete', 'Remaining'],
                datasets: [{
                    data: [n, 28 - n], // Set remaining to 0
                    backgroundColor: [
                        '#f68b15', // Orange color for completed part
                        'transparent' // Transparent for remaining part
                    ],
                    borderWidth: 0 // No border
                }]
            },
            options: {
                cutout: '92%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                rotation: Math.PI * 1.5,
                // rotation: rotation,
            }
        });

        // Clean up
        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, [n, rotation]); // Re-render the chart whenever n or rotation changes

    // Function to handle click event on the chart
    const handleChartClick = () => {
        // Update n to toggle between 17 and 21
        setN(prevN => (prevN === 17 ? 21 : 17));
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className='layer'></div>
            <canvas ref={chartRef} id="runningValue" onClick={handleChartClick}></canvas>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)rotate(-90deg)', textAlign: 'center'}}>
                <div className='numerator'>{n}</div>
                <hr></hr>
                <div className='denominator'>28</div>
            </div>
        </div>
    );
};

export default Donut;
