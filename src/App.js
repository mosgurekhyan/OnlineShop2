import { createContext, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import CartPage from './components/CartPage/CartPage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import HomePage from './components/HomePage/HomePage'
import HomeWrapper from './pages/HomeWrapper'

function App() {
  const [images, setImages] = useState([
    {
      id: '1',
      image: 'https://media.gettyimages.com/id/1157185989/photo/shes-a-model-student.jpg?s=612x612&w=0&k=20&c=a-3kxvZHE_CIGMDx3vB4Il1qkuIBzc8RDdn6iAKVYoA='
    },
    {
      id: '2',
      image: 'https://media.gettyimages.com/id/1263307689/photo/young-womans-fashion-style-young-pretty-fashioned-girl.jpg?s=612x612&w=0&k=20&c=vEeiMiW7T0NMaXnyL-gvQuJfMjnvHhAhy-5ra8fowP8='
    },
    {
      id: '3',
      image: 'https://media.gettyimages.com/id/1200866124/photo/bright-colors-of-autumn.jpg?s=612x612&w=0&k=20&c=KV8a6BFg1TsSvmfdEE6fUakHitkHnMdUW3oLxMtBGBI='
    },
    {
      id: '4',
      image: 'https://media.gettyimages.com/id/1200865755/photo/happy-girl-walking-near-palm-trees-on-a-summer-sunny-day.jpg?s=612x612&w=0&k=20&c=RHBAiQx75RF9Y74UX4xuJzVgLgN5dStAy8h09_fjf9s='
    },
    {
      id: '5',
      image: 'https://media.gettyimages.com/id/1125612330/photo/young-woman-in-black-hooded-shirt-against-pink-background.jpg?s=612x612&w=0&k=20&c=HaZUvIXBcy7Eq_RJvubJJO3PnKJVCWjdnKi2DWOTuvY='
    },
    {
      id: '6',
      image: 'https://media.gettyimages.com/id/1010215852/photo/beautiful-girl-wearing-hat.jpg?s=612x612&w=0&k=20&c=My74d5aoGLaALQ_wt0TJeatf5svgGS6ks1g0OS8pEMU='
    },
    {
      id: '7',
      image: 'https://media.gettyimages.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&w=0&k=20&c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw='
    },
    {
      id: '8',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=1930'
    },
    {
      id: '9',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedGsWdd9xl6EX4oxK9PRZldH1xg1brE422lcV5qvLaV2tEdBeqzT9fSvLwa-FaFrYhVE&usqp=CAU'
    },
    {
      id: '10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP01X4hVHe-LB2HN-HkQy5LFT829ahciEAf_nUAVfw4NM9cKOmLzWrcUZ_UBHT5EEav3w&usqp=CAU'
    }
  ])

  const providerValue = useMemo(() => ({images}), [images])
  return (
    <div className="App">
      <UseContext.Provider value={providerValue}>
        <Routes>
          <Route path='/' element={<HomeWrapper/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/category/:catname' element={<CategoryPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Route>
        </Routes>
      </UseContext.Provider>
    </div>
  )
}

export default App
export const UseContext = createContext(null)

