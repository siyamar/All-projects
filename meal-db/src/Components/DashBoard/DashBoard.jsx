import { useLoaderData } from "react-router-dom";


const DashBoard = () => {
    const meals =useLoaderData();
    const{strMeal, idMeal, strArea}= meals.meals
    return (
        <div>
            <h3>Name of the Meal: {strMeal}</h3>
            <p>Made in: {strArea}</p>
        </div>
    );
};

export default DashBoard;