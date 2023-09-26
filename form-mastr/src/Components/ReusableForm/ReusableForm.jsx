
const ReusableForm = ({formTitle,handleSubmit, 
    submitBtnText='Submit', children}) => {
    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.name.value,
            password: e.target.name.value
        }
        handleSubmit(data)
    }
    return (
        <div>
           {children}
             <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;