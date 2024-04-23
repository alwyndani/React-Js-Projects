/* eslint-disable react/jsx-key */
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle"
import { Prop } from "../hooks/Context";

export const Cart = () => {

  const { cartList, total } = Prop();

  useTitle('Cart');

  return (
    <main>
      <section style={{ margin: "30px 50px" }}>
        <h1 style={{ textAlign: "center" }}>Cart Items: {cartList.length} / ${total} </h1>
        {cartList.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  )
}
