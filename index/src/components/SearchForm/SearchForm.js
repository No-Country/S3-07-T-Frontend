import { Icon } from "@iconify/react"
import { useState } from "react"
import styled from "styled-components"

const SearchFormStyled = styled.form`
  display: flex;
  gap: 8px;
  padding: 12px 0;
  padding-top: 0px;
  justify-content: center;
  align-items: center;
  /* background-color: #00C981; */
  & > input{
    background-color: #D9D9D9;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 3px 10px;
  }

  & > input:focus {
    border: 1px solid transparent;
    outline: 1px solid #00C981;
  }

  & > button {
    border: 1px solid transparent;
    background-color: transparent;
    padding: 0;
  }

  & > button:first-child {
    width: 100%;
    height: 100%;
  }
`

export default function SearchForm ({changerSearch}) {
  const [search, setSearch] = useState("")

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmitSearchForm = (e) => {
    e.preventDefault()
    changerSearch(search)
  }

  return (
    <SearchFormStyled onSubmit={handleSubmitSearchForm}>
      <input type="text" value={search} onChange={handleChangeSearch} placeholder="Ingresa tu busqueda"/>
      <button>
        <Icon icon="bx:search" width={15}/>
      </button>
    </SearchFormStyled>
  )
}