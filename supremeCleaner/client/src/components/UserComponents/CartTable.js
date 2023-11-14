import React from "react";

export default function CartTable(props) {
  return (
    <>
      <div className="flex py-5 gap-3 md:gap-5 border-b">
        {/* IMAGE START */}
        {/* <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
          <img src="" alt="" width={120} height={120} />
        </div> */}
        {/* IMAGE END */}

        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            {/* PRODUCT TITLE */}
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
              {props.name}
            </div>
            {/* PRODUCT PRICE */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              R{props.price}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">Quantity:</div>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  min="1"
                />
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </div>
            <RiDeleteBin6Line
              onClick={() => removeFromCart(item.id)}
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
