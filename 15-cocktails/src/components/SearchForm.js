import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')  // Yukarıda import etmek yerine React. diyerek kullandık. (Aynı şey zaten)

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  React.useEffect(() => {
    searchValue.current.focus()   // input alanına direk focus olsun diye
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()  // form'da enter yapılınca sayfa refresh olmasın diye
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            placeholder="cocktail"
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
