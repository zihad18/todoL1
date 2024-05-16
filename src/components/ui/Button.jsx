const Button = ({text,onClick}) => {

    const style = {

    }

    return (
        <button style={style} onClick={onClick}>{text}</button>
    );
};

export default Button;