import axios from "axios"
import { useState } from "react"
import { createPortal } from "react-dom"
import { SERVER_URLS } from "../../configs/URLS"
import Modal from "../Modal/Modal"
import { AddedCard, ButtonAddedCard, ContainerAddeds, ContainerSearch, ContainerSearchAndButton, FormSearchAdd, ModalAddStyled, Result, ResultsList } from "./stylesModalAdd"

const adapterResult = {
  profile: (profile) => `${profile.firstName} ${profile.lastName}`,
  team: (team) => `${team.cohortType.substring(0,1)}${team.cohortNumber} - g${team.group}`,
  category: (category) => `${category.name}`
}

const search = {
  profile: searchParticipants,
  team: searchTeams,
  category: searchCategories,
}

async function searchParticipants (search = "") {
  const resUsers = await axios.get(`${SERVER_URLS.ALLUSERS}/?name=${search}`)

  return resUsers.data.docs
}

async function searchTeams (search) {
  console.log(search)
  const resUsers = await axios.get(`${SERVER_URLS.ALLTEAMS}`)
  return resUsers.data
}

async function searchCategories (search) {
  console.log(search)
  const resCategories = await axios.get(`${SERVER_URLS.ALLCATEGORIES}`)
  return resCategories.data
}

export default function ModalAdd ({type, title="", active, initialAddeds = [], limitAdd = 20}) {
  const [stateParent, actionParent] = initialAddeds
  const [searched, setSearched] = useState("")
  const [results, setResults] = useState([])
  const [addeds, setAddeds] = useState(stateParent)
  const [isOpen, setIsOpen] = active

  const handleSubmit = async(e) => {
    e.preventDefault()
    const searchResults = await search[type](searched)
    setResults(searchResults)
  }

  const addResult = (result) => {

    if(addeds.length === limitAdd) return

    setAddeds((prevState) => {
      let inPrevState = false

      for(let prevResult of prevState){
        if(prevResult._id === result._id){
          inPrevState = true
        }
      }

      if(inPrevState){
        return prevState
      }

      return [...prevState, result]
    })
  }

  const handleClickDeleteAdded = (toDelete) => {
    setAddeds((prevState)=> prevState.filter(prevAdded => prevAdded !== toDelete))
  }

  const handleClickSave = () => {
    actionParent(addeds)
    setIsOpen(false)
  }

  return createPortal(
    <Modal active={isOpen}>
      <ModalAddStyled active={isOpen}>
        <div onClick={()=>setResults([])}>
          <FormSearchAdd onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="add">{title}</label>
            <ContainerSearchAndButton>
              <ContainerSearch>
                <input type="text" name="add" value={searched} onChange={(e)=>setSearched(e.target.value)} />
                {
                  results.length ? 
                    <ResultsList>
                      {results
                        .map((result ,index)=> (
                          <Result key={result._id || index} onClick={()=>addResult(result)}>
                            <span>{adapterResult[type](result)}</span>
                          </Result>)
                        )}
                    </ResultsList> : ""
                }
              </ContainerSearch>
              <button onClick={handleSubmit}>Buscar</button>
            </ContainerSearchAndButton>
          </FormSearchAdd>
          <ContainerAddeds>

            {addeds.length ? addeds
              .map((added, index)=> {
                return (
                  <AddedCard key={ added._id || index}>
                    {adapterResult[type](added)}
                    <ButtonAddedCard onClick={()=>handleClickDeleteAdded(added)}>x</ButtonAddedCard>
                  </AddedCard>
                ) 
              }) : addeds[0]
            }
          </ContainerAddeds>
          <div>
            <button onClick={handleClickSave}>Guardar</button>
            <button onClick={()=>setIsOpen(false)}>Cancelar</button>
          </div>
        </div>
      </ModalAddStyled>
    </Modal>,
    document.getElementById("modal")
  )
}
