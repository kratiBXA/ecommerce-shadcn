'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="text-right pt-6 border-t mt-8">
            <p className="text-xl font-bold">
              Grand Total: ${grandTotal.toFixed(2)}
            </p>
            <Button className="mt-4 bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
