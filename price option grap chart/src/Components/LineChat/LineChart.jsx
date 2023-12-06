import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const matheMarksData =
        [
            { "student_id": 1, "name": "John", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92 },
            { "student_id": 2, "name": "Emma", "math_marks": 78, "physics_marks": 84, "chemistry_marks": 75 },
            { "student_id": 3, "name": "Michael", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 91 },
            { "student_id": 4, "name": "Olivia", "math_marks": 67, "physics_marks": 72, "chemistry_marks": 68 },
            { "student_id": 5, "name": "William", "math_marks": 73, "physics_marks": 80, "chemistry_marks": 74 },
            { "student_id": 6, "name": "Sophia", "math_marks": 88, "physics_marks": 90, "chemistry_marks": 85 },
            { "student_id": 7, "name": "James", "math_marks": 95, "physics_marks": 92, "chemistry_marks": 94 },
            { "student_id": 8, "name": "Charlotte", "math_marks": 62, "physics_marks": 66, "chemistry_marks": 63 },
            { "student_id": 9, "name": "Alexander", "math_marks": 81, "physics_marks": 85, "chemistry_marks": 80 },
            { "student_id": 10, "name": "Emily", "math_marks": 76, "physics_marks": 79, "chemistry_marks": 77 }
          ];
          
    return (
        <div>
            <LChart width={800} height={400} data={matheMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis ></YAxis>
                <Line dataKey={"math_marks"} stroke='red'></Line>
                <Line dataKey={"physics_marks"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;