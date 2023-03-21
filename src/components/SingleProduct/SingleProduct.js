import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../store/slices/API/API'
import { addToCart } from '../../store/slices/cart/cartSlice'
import { selectModal, setIsModalVisible } from '../../store/slices/modal/modalSlice'
import './SingleProduct.scss'

function SingleProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const {data: product} = useSelector(selectModal)

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1
      return newQty
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1
      if(newQty < 1){
        newQty = 1
      }
      return newQty
    })
  }

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price
    const tempProuduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProuduct))
    dispatch(setIsModalVisible(false))
    navigate('/cart')
  }
  
  return (
    <div className='singleProduct'>
      <div className='item'>
        <button className='x' onClick={() => dispatch(setIsModalVisible(false))}><i className='fas fa-times'></i></button>
        <div className='data'>
          <img src={product.images[0]} alt={product.title} />
          <div className='detail'>
            <h3 className='title'>{product.title}</h3>
            <h5>{product.description}</h5>
            <p>Price: {formatPrice(product.price)}</p>
            <hr />
            <div className='btns'>
              <span>Qty: </span>
              <button onClick={() => decreaseQty()}><i className='fas fa-minus'></i></button>
              <span>{qty}</span>
              <button onClick={() => increaseQty()}><i className='fas fa-plus'></i></button>
            </div>
            <button onClick={() => addToCartHandler(product)}><i className='fas fa-cart-shopping'></i><span>Add to cart</span> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct