function AddButton(props){
    return (
        <button onClick={props.handleClick} className={props.className}>{props.symbol}</button>
    )
}

export default AddButton;