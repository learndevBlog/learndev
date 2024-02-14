import React from 'react'

const PageTitle = ({children}:{ children: React.ReactNode, }) => {
  return (
    <h1 className="font-bold text-4xl">{children}</h1>
  )
}

export default PageTitle
