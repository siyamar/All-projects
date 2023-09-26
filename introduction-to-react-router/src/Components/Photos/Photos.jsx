import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            <h3>Total Photo: {photos.length}</h3>
            <div className="container">
                {
                    photos.map(photo=> <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;