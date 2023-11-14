import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import EmptyCart from "../../assets/images/empty-cart.jpeg";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleQuantityChange(itemId, quantity) {
    updateCartItemQuantity(itemId, quantity);
  }

  function handleIncrement(itemId) {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      updateCartItemQuantity(itemId, item.quantity + 1);
    }
  }

  function handleDecrement(itemId) {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(itemId, item.quantity - 1);
    }
  }

  function handlePayment() {
    navigate("/checkout");
  }
  return (
    <>
      <div className="container mx-auto md:py-20 px-5 md:px-0">
        {cart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cart.map((item) => (
                  <div
                    className="flex py-5 gap-3 md:gap-5 border-b"
                    key={item.id}
                  >
                    {/* IMAGE START */}
                    {/* <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                    <img src="" alt="" width={120} height={120} />
                  </div> */}
                    {/* IMAGE END */}

                    <div className="w-full flex flex-col">
                      <div className="flex flex-col md:flex-row justify-between">
                        {/* PRODUCT TITLE */}
                        <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                          {item.item}
                        </div>
                        {/* PRODUCT PRICE */}
                        <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                          R{item.price}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                          <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            {/* quantity controll div */}
                            <div className="flex">
                              <button
                                className=" w-[30px] h-[30px] bg-primary text-white text-2xl"
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </button>
                              <p
                                className=" w-[45px] h-[30px] bg-content/[0.08] text-secondary text-center flex justify-center items-center text-xl"
                                onChange={(e) =>
                                  handleQuantityChange(item.id, e.target.value)
                                }
                              >
                                {item.quantity}
                              </p>
                              <button
                                className=" w-[30px] h-[30px] bg-primary text-white text-2xl"
                                onClick={() => handleIncrement(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <svg
                          onClick={() => removeFromCart(item.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-trash3 cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1] relative">
                <div className="md:sticky md:top-[230px]">
                  <div className="text-lg font-bold">Summary</div>
                  <div className="p-5 my-5 bg-secondary/[0.05] rounded-xl">
                    <div className="flex justify-between">
                      <div className="uppercase text-md md:text-lg font-medium text-black">
                        Subtotal
                      </div>
                      <div className="text-md md:text-lg font-medium text-black">
                        R{totalPrice}
                      </div>
                    </div>
                    <div className="text-sm md:text-md py-5 border-t mt-5">
                      The subtotal reflects the total price of your order,
                      including duties and taxes, before any applicable
                      discounts. It does not include delivery costs and
                      international transaction fees.
                    </div>
                  </div>

                  {/* BUTTON START */}
                  <button
                    className="w-full py-4 rounded-md bg-primary  text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                    onClick={handlePayment}
                  >
                    Checkout
                    {/* {loading && <img src="/spinner.svg" />} */}
                  </button>
                  {/* BUTTON END */}
                </div>
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}
        {/* This is empty screen */}
        {cart.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src={EmptyCart}
              alt="Empty Cart"
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              to="/services"
              className="py-4 px-8 rounded-md bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8 bg-primary"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
