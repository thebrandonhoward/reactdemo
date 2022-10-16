function Card(props:any) {
    const classes = 'card' + props.className;

    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card;