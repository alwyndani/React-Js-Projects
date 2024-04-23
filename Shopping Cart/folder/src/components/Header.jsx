import styles from './Header.module.css'
import { Prop } from '../hooks/Context'
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {

  const { cartList } = Prop();
  // console.log(cart);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/assets/logoo.jpg" alt="logo" style={{ width: "80px", height: "75px" }} />
      </Link>
      <div className={styles.sec}>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/cart">Cart</NavLink>

      </div>
      <h3>Cart : {cartList.length}</h3>

    </div>
  )
}
