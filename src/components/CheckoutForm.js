import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateEmail, validateZip } from "../utils/helper";
import {
  CHANGE_PAYMENT_METHOD,
  CLEAR_ERROR_INPUT,
  DISPLAY_ERROR_EMAIL,
  DISPLAY_ERROR_ZIP,
  HANDLE_CHANGE_INPUT,
} from "../utils/actions";

const CheckoutForm = () => {
  const value = useSelector((state) => ({
    phone: state.checkout.phone,
    name: state.checkout.name,
    email: state.checkout.email,
    address: state.checkout.address,
    zip: state.checkout.Zip,
    country: state.checkout.country,
    city: state.checkout.city,
    eMoney: state.checkout.eMoneyNumber,
    ePin: state.checkout.eMoneyPin,
  }));
  const errorEmail = useSelector((state) => state.checkout.errorEmail);
  const errorZip = useSelector((state) => state.checkout.errorZip);
  const dispatch = useDispatch();
  const displayErrorEmail = useCallback(() => {
    dispatch({ type: DISPLAY_ERROR_EMAIL });
  }, [dispatch]);
  const displayErrorZip = useCallback(() => {
    dispatch({ type: DISPLAY_ERROR_ZIP });
  }, [dispatch]);
  const changePaymentMethod = useCallback(
    (paymentMethod) => {
      dispatch({ type: CHANGE_PAYMENT_METHOD, payload: { paymentMethod } });
    },
    [dispatch]
  );
  const handleChangeInput = useCallback(
    (name, value) => {
      dispatch({ type: HANDLE_CHANGE_INPUT, payload: { name, value } });
    },
    [dispatch]
  );
  const clearErrorInput = useCallback(
    (inputName) => {
      dispatch({ type: CLEAR_ERROR_INPUT, payload: { inputName } });
    },
    [dispatch]
  );
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    handleChangeInput(e.target.name, e.target.value);
    console.log(e.target.name, e.target.value);
  };
  return (
    <form
      onSubmit={submitHandler}
      id="checkoutForm"
      name="checkoutForm"
      className="w-10/12 m-auto flex flex-col gap-6"
    >
      <p className="text-light-beige">BILLING DETAILS</p>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-4"
          name="name"
          placeholder="Alexia Ward"
          value={value.name}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="email">
          Email Address
        </label>
        {errorEmail && <p className="text-light-beige">wrong format</p>}
        <input
          className={
            errorEmail
              ? "border-2 border-light-beige rounded-lg px-4 py-6"
              : "border border-dark-grey rounded-lg px-4 py-6"
          }
          name="email"
          placeholder="alexei@mail.com"
          inputMode="email"
          value={value.email}
          onFocus={(e) => clearErrorInput(e.target.value)}
          onBlur={(e) => {
            if (validateEmail(e.target.value) === false) {
              displayErrorEmail();
            }
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="phone"
          placeholder="0978-123-456"
          required
        />
      </div>
      <p className="text-light-beige">SHIPPING INFO</p>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="address">
          Your Address
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="address"
          placeholder="1137 Williams Avenue"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="zip">
          ZIP Code
        </label>
        {errorZip && <p className="text-light-beige">wrong format</p>}
        <input
          className={
            errorZip
              ? "border-2 border-light-beige rounded-lg px-4 py-6"
              : "border border-dark-grey rounded-lg px-4 py-6"
          }
          name="zip"
          placeholder="30634"
          inputMode="numeric"
          type="number"
          onBlur={(e) => {
            if (validateZip(e.target.value) === false) {
              displayErrorZip();
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="city">
          City
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="city"
          placeholder="Taipei"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="country">
          Country
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="country"
          placeholder="Taiwan"
        />
      </div>
      <p className="text-light-beige">PAYMENT DETAILS</p>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Payment Method</label>
        <div className="flex items-center border border-dark-grey rounded-lg px-4 py-6 gap-4">
          <input
            checked
            type="radio"
            id="emoney"
            name="payment"
            value="emoney"
          />
          <label className="font-bold" htmlFor="emoney">
            e-Money
          </label>
        </div>
        <div className="flex items-center border border-dark-grey rounded-lg px-4 py-6 gap-4">
          <input id="cash" name="payment" type="radio" />
          <label className="font-bold" htmlFor="cash">
            Cash on Delivery
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="e-number">
          e-Money Number
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="e-number"
          placeholder="238521993"
          inputMode="numeric"
          type="number"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="e-pin">
          e-Money PIN
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="e-pin"
          placeholder="689"
          inputMode="numeric"
          type="number"
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
