import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="indicator">
          <FiShoppingCart className="text-[28px] " />
          <span className="badge badge-warning badge-md indicator-item">5</span>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[10] bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 z-[20] w-60 md:w-96 bg-base-100 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300`}
      >
        <div className="p-4">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="mt-4">
            <button
              className="btn btn-primary btn-block"
              onClick={() => setIsOpen(false)}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
