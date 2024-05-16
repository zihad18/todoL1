const TextField = ({value,onChange}) => {

    return (
        <input 
            type="text"
            value={value}
            onChange={onChange}
        />
    );
};

export default TextField;