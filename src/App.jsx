import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from './api'

function App() {
  //searchImages('cars')
  const [images, setIamges] = useState([])

  const nandleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchImages(term)
    setIamges(result)
  }

  return (
    <>
    <h1><picture> App</picture></h1>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/> 
    </>
  )
}

export default App