const TextField = ({inputs,handleInputChange}) => {

    return (
        <input 
            type="text"
            value={inputs}
            onChange={handleInputChange}
        />
    );
};

export default TextField;