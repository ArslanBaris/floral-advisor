import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Layout/Navbar'
import Categories from '../components/Categories/Categories'
import { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Survey from '@/components/Survey/Survey'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategoryOpt = (category) => {
    setActiveIndex("1")
    setSelectedCategory(category)

  }

  const renderPage = (activeIndex) => {
    if (activeIndex == "0") {
      return <Categories setSelectedCategory={setCategoryOpt} />
    } else if (activeIndex == "1") {
      return <Survey setActiveIndex={setActiveIndex} />
    }
  }

  return (
    <>

      <Navbar />

      {renderPage(activeIndex)}
    </>

  )
}
