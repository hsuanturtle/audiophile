import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateEmail, validateZip } from "../utils/helper";
import {
  CHANGE_PAYMENT_METHOD,
  CLEAR_ERROR_INPUT,
  DISPLAY_ERROR_EMAIL,
  DISPLAY_ERROR_ZIP,
  HANDLE_CHANGE_INPUT,
  IS_CHECKOUT_FORM_VALID,
} from "../utils/actions";

const CheckoutForm = () => {
  //USESELECTOR
  const value = useSelector((state) => ({
    phone: state.checkout.phone,
    name: state.checkout.name,
    email: state.checkout.Email,
    address: state.checkout.address,
    zip: state.checkout.Zip,
    country: state.checkout.country,
    city: state.checkout.city,
    eMoney: state.checkout.eMoneyNumber,
    ePin: state.checkout.eMoneyPin,
    paymentMethod: state.checkout.paymentMethod,
  }));
  const errorEmail = useSelector((state) => state.checkout.errorEmail);
  const errorZip = useSelector((state) => state.checkout.errorZip);

  //USEDISPATCH
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

  const isCheckoutFormValid = useCallback(() => {
    dispatch({ type: IS_CHECKOUT_FORM_VALID });
  }, [dispatch]);

  //PREVENT FORM SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
  };
  //DETECT THE INPUT NAME AND VALUE
  const changeHandler = (e) => {
    handleChangeInput(e.target.name, e.target.value);
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
        {/* NAME */}
        <label className="font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-4"
          name="name"
          placeholder="Alexia Ward"
          value={value.name}
          onChange={(e) => changeHandler(e)}
          onBlur={() => isCheckoutFormValid()}
        />
      </div>

      {/* EMAIL */}
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
          name="Email"
          placeholder="alexei@mail.com"
          inputMode="email"
          value={value.email}
          onFocus={(e) => clearErrorInput(e.target.name)}
          onBlur={(e) => {
            if (validateEmail(e.target.value) === false) {
              displayErrorEmail();
            }
            isCheckoutFormValid();
          }}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>

      {/* PHONE NUMBER */}
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="phone"
          placeholder="0978-123-456"
          required
          value={value.phone}
          inputMode="tel"
          onChange={(e) => changeHandler(e)}
          onBlur={() => isCheckoutFormValid()}
        />
      </div>
      <p className="text-light-beige">SHIPPING INFO</p>

      {/* ADDRESS */}
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="address">
          Your Address
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="address"
          placeholder="1137 Williams Avenue"
          value={value.address}
          onChange={(e) => changeHandler(e)}
          onBlur={() => isCheckoutFormValid()}
        />
      </div>

      {/* ZIP */}
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
          name="Zip"
          placeholder="30634"
          inputMode="numeric"
          type="number"
          onBlur={(e) => {
            if (validateZip(e.target.value) === false) {
              displayErrorZip();
            }
            isCheckoutFormValid();
          }}
          onFocus={(e) => clearErrorInput(e.target.name)}
          onChange={(e) => changeHandler(e)}
        />
      </div>

      {/* CITY */}
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="city">
          City
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="city"
          placeholder="Taipei"
          value={value.city}
          onChange={(e) => changeHandler(e)}
          onBlur={() => isCheckoutFormValid()}
        />
      </div>

      {/* COUNTRY */}
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="country">
          Country
        </label>
        <input
          className="border border-dark-grey rounded-lg px-4 py-6"
          name="country"
          placeholder="Taiwan"
          value={value.country}
          onChange={(e) => changeHandler(e)}
          onBlur={() => isCheckoutFormValid()}
        />
      </div>
      <p className="text-light-beige">PAYMENT DETAILS</p>

      {/* PAYMENT METHOD */}
      <div className="flex flex-col gap-2">
        <label className="font-bold">Payment Method</label>
        <div className="flex items-center border border-dark-grey rounded-lg px-4 py-6 gap-4">
          <input
            defaultChecked
            type="radio"
            id="emoney"
            name="payment"
            value={value.paymentMethod}
            onClick={() => {
              changePaymentMethod("e-Money");
              isCheckoutFormValid();
            }}
          />
          <label className="font-bold" htmlFor="emoney">
            e-Money
          </label>
        </div>
        <div className="flex items-center border border-dark-grey rounded-lg px-4 py-6 gap-4">
          <input
            id="cash"
            name="payment"
            type="radio"
            value="cash"
            onClick={() => {
              changePaymentMethod("Cash");
              isCheckoutFormValid();
            }}
          />
          <label className="font-bold" htmlFor="cash">
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* PAYMENT METHOD- EMONEY */}
      {value.paymentMethod === "e-Money" && (
        <div>
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
              value={value.eMoney}
              onChange={(e) => changeHandler(e)}
              onBlur={() => isCheckoutFormValid()}
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
              value={value.ePin}
              onChange={(e) => changeHandler(e)}
              onBlur={() => isCheckoutFormValid()}
            />
          </div>
        </div>
      )}

      {/* PAYMENT METHOD CASH */}
      {value.paymentMethod === "Cash" && (
        <div className="text-center">
          <p className="font-bold text-dark-grey">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
