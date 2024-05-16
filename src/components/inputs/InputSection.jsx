import TextField from "../ui/TextField";


const InputSection = ({inputs,handleInputChange}) => {

    return (
        <TextField 
            value = {inputs}
            onChange = {handleInputChange}
        />
    );
};

export default InputSection;