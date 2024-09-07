import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const PlaceOrder = () => {
  const { total_price, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div className="container">
        <h2>Place Your Order</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-details">
            <div className="order-item">
              <p>Subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className="order-item">
              <p>Shipping Fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <div className="order-item total">
              <p>Total:</p>
              <p>
                <FormatPrice price={total_price + shipping_fee} />
              </p>
            </div>
          </div>
        </div>

        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <form className="shipping-form">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip Code:</label>
              <input type="text" id="zip" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" required />
            </div>
          </form>
        </div>

        <div className="cart-two-button">
          <NavLink to="/products">
            <Button >Continue Shopping</Button>
          </NavLink>
          <Button className="btn payment-cart"> payment</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  h2, h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .order-summary {
    margin-bottom: 4rem;
  }

  .order-details {
    background: #f8f8f8;
    padding: 2rem;
    border-radius: 8px;
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 1.4rem;
  }

  .total {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .shipping-info {
    margin-bottom: 4rem;
  }

  .shipping-form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }

  input {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.4rem;
  }

  .order-actions {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
    margin-top: 2rem;
  }
    
 .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .payment-cart {
      background-color: #e74c3c;
    }
  }

  .btn-continue-shopping {
    background-color: ${({ theme }) => theme.colors.helper};
    width: 48%;
    padding: 1.2rem;
    font-size: 1.6rem;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn-continue-shopping:hover {
    background-color: ${({ theme }) => theme.colors.heading};
  }

  .btn-clear-cart {
    background-color: ${({ theme }) => theme.colors.red};
    width: 48%;
    padding: 1.2rem;
    font-size: 1.6rem;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn-clear-cart:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

export default PlaceOrder;
