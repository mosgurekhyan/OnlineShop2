import { useContext, useEffect, useState } from 'react'
import { UseContext } from '../../App'
import './Slider.scss'

function Slider() {
  const {images} = useContext(UseContext)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])
  return (
    <>
      <section className="section">
        {images.map((person, personIndex) => {
          const { id, image } = person
          let position = "nextSlide"
          if (personIndex === index) {
            position = "activeSlide"
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === images.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article key={id} className={position}>
              <div style={{backgroundImage: `url(${image})`}} className="person-img"></div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Slider