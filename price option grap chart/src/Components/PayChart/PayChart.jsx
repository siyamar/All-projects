import { PieChart, Pie, Tooltip, } from 'recharts';


const PayChart = () => {
    const groupChart = [
        { "name": "Group A", "value": 250 },
        { "name": "Group B", "value": 500 },
        { "name": "Group C", "value": 300 },
        { "name": "Group D", "value": 200 },
        { "name": "Group E", "value": 400 }
      ];
    return (
        <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={groupChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label = "group"
          />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default PayChart;