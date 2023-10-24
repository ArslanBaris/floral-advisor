import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Layout/Navbar'
import Categories from '../components/Categories/Categories'
import { useContext, useState } from 'react'
import Survey from '@/components/Survey/Survey'
import { useAppContext } from '../Context/AppContext';

export default function Home() {

  const [activeIndex, setActiveIndex] = useState("Categories");
  const { changeSelectedCategory } = useAppContext();

  const setCategoryOpt = (category) => {
    setActiveIndex("Survey")
    changeSelectedCategory(category)

  }

  const renderPage = (activeIndex) => {
    if (activeIndex == "Categories") {
      return <Categories setCategoryOpt={setCategoryOpt} />
    } else if (activeIndex == "Survey") {
      return <Survey setActiveIndex={setActiveIndex} />
    }
  }

  return (
    <>

      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <div className=''>
      {renderPage(activeIndex)}

      </div>

    </>

  )
}
