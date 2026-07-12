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
          <div key={item.id} className="bg-green-300 w-full h-3/4 flex ">
           <div className="left bg-blue-200 h-full">
          <img 
          src={item.image}
           alt={item.title}
           className="w-full h-full "
           />
           </div>
           <div className="right">
             <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
           </div>
          </div>
        ))
      )}
    </div>
  );
}