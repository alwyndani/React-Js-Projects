/* eslint-disable react/prop-types */
import styles from './ProductCard.module.css'
import { Prop } from '../hooks/Context';

export const ProductCard = ({product}) => {

    const {name, price, image} = product;

    const {addToCart, cartList} = Prop();

  const handleClick =()=> {
     addToCart(product);
     console.log(cartList);
  }

  return (
    <div className={styles.productCard}>
   <img src={image} alt='image' />
   <p className={styles.name}> {name} </p>
   <div className={styles.action}>
    <p> ${price} </p>
    <button onClick={()=> handleClick()}>Add To Cart</button>
   </div>
    </div>
  )
}
