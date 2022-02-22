import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { topFunction } from "../utils/helper";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutProduct from "../components/CheckoutProduct";
import CheckoutModal from "../components/CheckoutModal";
import { DISPLAY_CHECKOUT_MODAL } from "../utils/actions";

const PayPage = () => {
  const navigate = useNavigate();

  // GO BACK TO PREVIOUS PAGE
  const BackHandler = () => {
    navigate(-1);
    topFunction();
  };

  // USESLECTOR
  const checkoutModal = useSelector((state) => state.checkout.checkoutModal);
  const checkoutFormValid = useSelector(
    (state) => state.checkout.isCheckoutFormValid
  );

  //USEDISPATCH
  const dispatch = useDispatch();
  const showModal = useCallback(() => {
    dispatch({ type: DISPLAY_CHECKOUT_MODAL });
  }, [dispatch]);
  
  //SHOW MODAL AFTER PAYING
  const ModalHandler = () => {
    showModal();
    if (checkoutModal === true) {
      document.body.style.overflow = "hidden";
    }
  };


  return (
    <div className="min-h-screen m-auto bg-light-grey py-20">
      <button
        onClick={() => BackHandler()}
        className="mt-6 ml-6 text-dark-grey mb-4"
      >
        Go Back
      </button>
      <div className="flex flex-col m-auto xl:flex-row xl:gap-8 xl:w-10/12 xl:justify-around">
        <div className=" min-h-80 w-10/12 m-auto bg-white rounded-xl">
          <div className="p-8">
            <h1 className="font-bold text-4xl">CHECKOUT</h1>
          </div>
          <CheckoutForm />
        </div>
        <div className="min-h-60 w-10/12 m-auto bg-white mt-10 rounded-xl">
          <div className="p-8">
            <h1 className="font-bold text-2xl">SUMMARY</h1>
          </div>
          <CheckoutProduct />
          <button
            className="mt-8 text-center ml-4 w-11/12 bg-light-beige text-white px-8 py-4 hover:bg-vanilla ease-linear duration-300"
            disabled={!checkoutFormValid}
            type="submit"
            form="CheckoutForm"
            onClick={ModalHandler}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>
      {checkoutModal && <CheckoutModal />}
    </div>
  );
};

export default PayPage;
