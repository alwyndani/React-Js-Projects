/* eslint-disable react/prop-types */
import styles from './CartCard.module.css';
import { Prop } from '../hooks/Context';

export const CartCard = ({product}) => {

 const {name, price, image} = product;

  const { removeFromCart, cartList } = Prop();

  const handleClick =()=> {
    removeFromCart(product);
    console.log(cartList);
  }

  return (
    <div className={styles.cartCard}>
   <img src={image} alt={image}/>
   <p className={styles.productName}> {name} </p>
   <p className={styles.productPrice}> ${price} </p>
   <button onClick={()=> handleClick()}>Remove</button>
    </div>
  )
}
