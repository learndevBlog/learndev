import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'

function HomePage() {
  return (
    <PageTemplate>
      <Banner />
      <Categories />
    </PageTemplate>
  )
}

export default HomePage
