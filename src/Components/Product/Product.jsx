import style from './Product.module.css';

export default function Product({ product }) {
    return <div className={style.product}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>    
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p className="raiting"><span>{product.raiting}</span></p>
    </div>
}


// const props = {
//     product : {}
// }

// props.product

// const { product } = props