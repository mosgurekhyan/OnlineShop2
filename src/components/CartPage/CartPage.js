import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../store/slices/API/API'
import { clearCart, getCartTotal, removeFromCart, selectCart, toggleCartQty } from '../../store/slices/cart/cartSlice'
import './CartPage.scss'

function CartPage() {
  const dispatch = useDispatch()
  const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector(selectCart)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [useSelector(selectCart)])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const emtyCartMsg = <h3 className='empty'>No items found!</h3>
  return (
    <>
      <div className='cartPage'>
        <Link to='/'><i className='home fas fa-home'></i></Link>
        <i className='chevron fas fa-chevron-right'></i>
        <span className='cartspan'>Cart</span>
      </div>
      <div className='myCart'>
        <h1>MY CART</h1>
        {
          cartProducts.length === 0 ? emtyCartMsg : (
          <>
            {
              cartProducts.map(e => 
                <div key={e.id} className='cart'>
                  <div className='imgbtn'>
                    <div style={{backgroundImage: `url(${e.images[0]})`}}></div>
                    <button onClick={() => dispatch(removeFromCart(e.id))}><i className='fas fa-trash'></i></button>
                  </div>
                  <div className='data'>
                    <section>
                      <h4>{e.title}</h4>
                      <div className='btns'>
                        <span>Qty: </span>
                        <button onClick={() => dispatch(toggleCartQty({id: e.id, type: 'DEC'}))}><i className='fas fa-minus'></i></button>
                        <span>{e.quantity}</span>
                        <button onClick={() => dispatch(toggleCartQty({id: e.id, type: "INC"}))}><i className='fas fa-plus'></i></button>
                      </div>
                      <h3>Price: {formatPrice(e.price)}</h3>
                    </section>
                    <div className='h3span'>
                      <span className='spanPrice'>Sub Total:</span>
                      <h3>{formatPrice(e.totalPrice)}</h3>
                    </div>
                  </div>
                </div>
              )
            }
          </>
          )
        }
      </div>
      <button onClick={() => dispatch(clearCart())} className='clear'>Clear Cart</button>
      <ul className='accounts'>
        <h3>Order Summary</h3>
        <hr />
        <li>
         <span>Selected {totalItems} item(s) Price</span>
         <span>{formatPrice(totalAmount)}</span>
        </li>
        <li>
         <span>Discount</span>
         <p>-<span>{formatPrice(0)}</span></p>
        </li>
        <li>
         <span>Delivery cost</span>
          <p>+<span>{formatPrice(deliveryCharge)}</span></p>
        </li>
        <li className='li'>
          <span>Grand Total:</span>
          <span>{formatPrice(totalAmount + deliveryCharge)}</span>
        </li>
        <button>Proceed to Checkout</button>
      </ul>
   </>
  )
}

export default CartPage