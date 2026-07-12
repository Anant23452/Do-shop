import useCartStore from "../stores/CartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty 🛒</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}