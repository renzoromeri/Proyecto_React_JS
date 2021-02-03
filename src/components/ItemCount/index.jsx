import "./style.css";


export const ItemCount = ({stock, onAdd, onRest, contador}) => {

    return (
        <>
        <div>
        <button onClick={onRest} >-</button>
        <b>{contador}</b>
        {(contador < stock) ?
        <button onClick={ () => { onAdd(stock) } }>+</button>
        : <p>No queda mas stock, lo lamento!!!</p>
        }
        </div>
        <div>
        <button>Comprar</button>
        </div>
        </>
    )
}