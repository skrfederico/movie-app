import React from 'react'

export function Form(props) {
  const handleClick = () => {
    const searchTerms = [
      'Ant-man and the wasp: quantumania',
      'Die Hard',
      'Avatar 3',
      'Cocaine Bear',
    ]
    searchTerms.forEach((searchTerm) => {
      props.movieSearch(searchTerm)
    })
  }

  return (
    <div>
      <button onClick={handleClick}>This week's flicks</button>
    </div>
  )
}
