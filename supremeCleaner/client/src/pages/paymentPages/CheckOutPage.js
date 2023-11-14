import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useCart } from "../../context/cartContext";

const CREATE_ORDER = gql`
  mutation createOrder(
    $name: String!
    $email: String!
    $phone: String!
    $cellphone: String!
    $address: String!
    $items: String!
    $amount: Int!
    $city: String!
    $postcode: String!
    $note: String!
  ) {
    createOrder(
      data: {
        name: $name
        email: $email
        phone: $phone
        cellphone: $cellphone
        address: $address
        items: $items
        amount: $amount
        city: $city
        postcode: $postcode
        note: $note
      }
    ) {
      data {
        id
        attributes {
          name
          email
          phone
          cellphone
          address
          items
          amount
          city
          postcode
          note
        }
      }
    }
  }
`;
const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
        username
      }
    }
  }
`;

export default function CheckOutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [orderId, setOrderId] = useState("")
  const { clearCart } = useCart();

  useEffect(() => {
    // Retrieve cart items from local storage
    const savedCartItems = JSON.parse(localStorage.getItem("cart"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);
  const itemStrings = cartItems.map(
    (item) => `${item.quantity} x ${item.item}`
  );
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  const [createOrder] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      setOrderId(data?.createOrder?.data?.id)
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
  const [signup] = useMutation(SIGNUP_MUTATION);

  const itemString = itemStrings.join(", ");
  const handleForm = async (event) => {
    event.preventDefault();
    // validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // validate confirm email
    if (email !== confirmEmail) {
      setConfirmEmailError("Emails do not match.");
      return;
    }
    try {
      await createOrder({
        variables: {
          name,
          email,
          phone,
          cellphone,
          address,
          items: itemString,
          amount: totalPrice,
          city,
          postcode,
          note,
        },
      });
      clearCart();
      await signup({
        variables: { username: name, email: email, password: password },
      });

    event.target.action = process.env.REACT_APP_PAYFAST_MERCHANT_URL;
    event.target.submit();

      // Handle form submission logic here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-5 md:px-0">
          <form
            onSubmit={handleForm}
            action={process.env.REACT_APP_PAYFAST_MERCHANT_URL}
            method="post"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:basis-8/12">
                <div className="grid gap-4 lg:gap-6 py-10 md:px-10">
                  <input
                    type="hidden"
                    name="merchant_id"
                    value={process.env.REACT_APP_PAYFAST_MERCHANT_ID}
                  />
                  <input
                    type="hidden"
                    name="merchant_key"
                    value={process.env.REACT_APP_PAYFAST_MERCHANT_KEY}
                  />
                  <input type="hidden" name="amount" value={totalPrice} />
                  <input type="hidden" name="item_name" value={itemStrings} />
                  <input
                    type="hidden"
                    name="return_url"
                    value={process.env.REACT_APP_PAYFAST_MERCHANT_RETURN_URL}
                  />
                  <input
                    type="hidden"
                    name="cancel_url"
                    value={process.env.REACT_APP_PAYFAST_MERCHANT_CANCEL_URL}
                  />
                  <input
                    type="hidden"
                    name="notify_url"
                    value={process.env.REACT_APP_PAYFAST_MERCHANT_NOTIFY_URL}
                  />
                  <input
                    type="hidden"
                    name="custom_str1"
                    value={orderId}
                  />
                  <p className="py-5 text-content">
                    Please fill out the information below.
                  </p>
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      {emailError && <div>{emailError}</div>}
                    </div>
                  </div>
                  {/* End Grid */}
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="cell-phone"
                        id="cell-phone"
                        autoComplete="phone"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Cell Phone Number"
                        value={cellphone}
                        onChange={(event) => setCellphone(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  {/* Grid */}
                  <p className="py-5 text-content">
                    Shipping or Dlivery Details{" "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Adress"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="City"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <input
                      type="text"
                      name="postcode"
                      id="postcode"
                      className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                      placeholder="PostCode"
                      value={postcode}
                      onChange={(event) => setPostcode(event.target.value)}
                      required
                    />
                  </div>
                  <p className="py-5 text-content">Account Details</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <input
                        type="email"
                        name="confirm-email"
                        id="confirm-email"
                        autoComplete="emnail"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Confirm Email"
                        value={confirmEmail}
                        onChange={(event) =>
                          setConfirmEmail(event.target.value)
                        }
                        required
                      />
                      {confirmEmailError && <div>{confirmEmailError}</div>}
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        className="hl focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <p className="py-5 text-content">Notes For order </p>
                  <div>
                    <textarea
                      id="note"
                      name="note"
                      rows={4}
                      className="hl  focus:outline-none py-3 px-4 block w-full border-[#ccc] rounded-0 text-sm text-content border-b "
                      placeholder="Order Note"
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="md:basis-4/12 py-10 relative">
                <div className="md:sticky md:top-[230px]">
                  <div className="p-5 my-5 bg-secondary/[0.05] rounded-xl">
                    {/* cart items summary  */}
                    {cartItems.length > 0 && (
                      <div>
                        <h1 className="py-3 h1 text-secondary text-xl">
                          Cart Items
                        </h1>
                        <table className="w-full  text-center">
                          <thead className="bg-content/[0.08]">
                            <tr>
                              <th className="p-3 h1">Item</th>
                              <th className="p-3 h1">Quantity</th>
                              {/* <th className="p-3 h1">Price</th> */}
                              <th className="p-3 h1">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3 p">{item.item}</td>
                                <td className="p-3 p">{item.quantity}</td>
                                {/* <td className="p-3 p">{item.price}</td> */}
                                <td className="p-3 p">
                                  {item.quantity * item.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    <div className="flex justify-between pt-5">
                      <div className="uppercase text-lg md:text-xl h1 text-secondary">
                        Total
                      </div>
                      <div className="text-md md:text-lg font-medium text-black">
                        R{totalPrice}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-md bg-primary  text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  >
                    Place A Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
