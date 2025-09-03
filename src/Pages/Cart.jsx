import React from 'react'

const Cart = ([ cart ]) => {
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                        <h2 className="cart__title">Cart</h2>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Books</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                <div className="cart__item">
                                    <div className="cart__book">
                                        <img src="" className='cart__book--img' alt="" />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title"></span>
                                            <button>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input type="number" min={0} max={99} className='cart__input' />
                                    </div>
                                    <div className="cart__total">

                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="total">
                            <div className="total__items total__sub-total">
                                <span>Subtotal</span>
                                <span>$9.00</span>
                            </div>                        
                            <div className="total__items total__tax">
                                <span>Tax</span>
                                <span>$9.00</span>
                            </div>                        
                            <div className="total__items total__price">
                                <span>Total</span>
                                <span>$9.00</span>
                            </div>
                            <butto className="btn btn__menu no-cursor">Proceed to Checkout</butto>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      
    </div>
  );
}

export default Cart
