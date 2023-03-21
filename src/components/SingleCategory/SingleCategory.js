import { useDispatch, useSelector } from 'react-redux'
import Error from '../../pages/Error'
import Loader from '../../pages/Loader/Loader'
import { formatPrice, STATUS } from '../../store/slices/API/API'
import { selectModal, setIsModalVisible, setModalData } from '../../store/slices/modal/modalSlice'
import SingleProduct from '../SingleProduct/SingleProduct'
import './SingleCategory.scss'

function SingleCategory({products, status}) {
  const dispatch = useDispatch()
  const {isModalVisible} = useSelector(selectModal)

  const viewModalHandler = (data) => {
    dispatch(setModalData(data))
    dispatch(setIsModalVisible(true))
  }

  if(status === STATUS.ERROR) return(<Error/>)
  if(status === STATUS.LOADING) return(<Loader/>)
  
  return (
    <div className='singleCategory'>
      {
        isModalVisible && <SingleProduct/>
      }
      <h1>{products[0].category.name}</h1>
      <>
        {
          products.map(e => (
            <div key={e.id} onClick={() => viewModalHandler(e)} className='data'>
              <img src={e.images[0]} alt="" />
              <h2 className='name'>{e.category.name}</h2>
              <div className='data2'>
                <h6>{e.title}</h6>
                <h4>{formatPrice(e.price)}</h4>
              </div>
            </div>
          ))
        }
      </>
    </div>
  )
}

export default SingleCategory