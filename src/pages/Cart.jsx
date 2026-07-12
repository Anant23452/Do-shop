import useCartStore from "../stores/CartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  //increasing 
  const increaseQuantity = useCartStore(
  (state) => state.increaseQuantity
);
// decreasing 
const decreaseQuantity= useCartStore(
  (state)=>state.decreaseQuantity
)
//remove cart 
const removeFromCart = useCartStore(
  (state)=>state.removeFromCart
)
// total calculation 
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col gap-3">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty 🛒</h2>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="bg-green-300 w-full h-64 flex my-2 gap-2"
          >
            <div className="left bg-blue-200 h-full w-1/4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="right p-4 flex flex-col  ">
              <p className="text-3xl font-bold p-2  ">{item.title}</p>
              <p className="text-xl font-bold text-start">
                Quantity: {item.quantity}
              </p>
              <p className="text-start">${item.price}</p>
              <div className="mt-10 text-right">
                <h2 className="text-3xl font-bold">
                  Total: ${total.toFixed(2)}
                </h2>
              </div>
              <div className="showbu flex items-center gap-6 w-80 h-10">
                {/* Quantity Control Group */}
                <div className="flex items-center border-2 rounded-lg overflow-hidden h-full">
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 h-full flex items-center justify-center text-lg font-bold"
                  onClick={()=>decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  {/* Quantity Display */}
                  <span className="px-5 text-lg font-semibold">1</span>

                  <button
                   className="px-4 bg-gray-100 hover:bg-gray-200 h-full flex items-center justify-center text-lg font-bold"
                   onClick={()=>increaseQuantity(item.id)}
                   >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button className="text-base text-red-600 hover:text-red-800 font-semibold hover:underline"
                onClick={()=>removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
