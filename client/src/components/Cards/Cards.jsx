import React from 'react'
import Card from '../Card/Card'

const Cards = ({page, setPage, total, allDogs}) => {

  const lastPage = () => {
    const resultPage = Math.max(page-1, 0)
    setPage(resultPage)
    console.log(allDogs)
    // setPage(page -1)
    // nextPage--
  }

  const nextPage = () => {
    const resultPage = Math.min(page+1, total)
    setPage(resultPage)

    console.log(allDogs)
    // console.log(allDogs)
    
    // setPage(page++)
    // nextPage++
    // console.log(page, nextPage)
  }

  return (
    <div>
      <Card page={page +1} total={total} lastPage={lastPage} nextPage={nextPage} allDogs={allDogs}/>
    </div>
  )
}

export default Cards