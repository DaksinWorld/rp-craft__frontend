import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, registerables, Tooltip} from "chart.js";
import {Doughnut} from "react-chartjs-2";

const Donut = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Rewards', 'DEX/CEX', 'Foundation', 'Team', 'Token Sales', 'Marketing', 'Project Development'],
        datasets: [
            {
                label: '900m',
                data: [90, 180, 270, 90, 45, 135, 90],
                backgroundColor: [
                    'rgb(74,136,172)',
                    'rgb(172,130,74)',
                    'rgb(74,77,172)',
                    'rgb(126,74,172)',
                    'rgb(81,172,74)',
                    'rgb(172,74,74)',
                    'rgb(172,161,74)',
                ],
                borderColor: 'none'
            },
        ],
    };

    return <div className={'w-full flex justify-center'}>
        <div className={'w-[500px]'}>
            <Doughnut
                width={'30%'}
                height={'30%'}
                data={data}
            />
        </div>;
    </div>
};

export default Donut;