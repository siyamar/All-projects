import { BarChart as BChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = () => {
    const studentResult= [
        {
          "course_name": "Math",
          "result": 85
        },
        {
          "course_name": "Physics",
          "result": 78
        },
        {
          "course_name": "Chemistry",
          "result": 92
        },
        {
          "course_name": "Biology",
          "result": 88
        },
        {
          "course_name": "History",
          "result": 75
        },
        {
          "course_name": "English",
          "result": 90
        },
        {
          "course_name": "Computer Science",
          "result": 94
        },
        {
          "course_name": "Physical Education",
          "result": 82
        },
        {
          "course_name": "Art",
          "result": 76
        }
      ];
      
    return (
        <div>
             <BChart
          width={500}
          height={300}
          data={studentResult}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="course_name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="result" fill="#8884d8" background={{ fill: '#eee' }} />
        </BChart>
        </div>
    );
};

export default BarChart;