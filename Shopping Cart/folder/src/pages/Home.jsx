/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { ProductCard } from '../components/ProductCard'
import { useTitle } from '../hooks/useTitle'
import styles from './Home.module.css'
import { Prop } from '../hooks/Context'

export const Home = () => {

const { products } = Prop();
console.log(products);

  useTitle('Home')

  return (
    <main>
      <section className={styles.products}>
      { products.map((product)=> (
        <ProductCard product={product} key={product.id} />
      ))}
      </section>
    </main>
  )
}
