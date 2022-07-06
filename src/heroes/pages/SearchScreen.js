import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from "query-string"
import useForm from '../hooks/useForm'
import { SearchNames } from '../../selectors/searchNames'
import { HeroCard } from '../components/HeroCard'

export const SearchScreen = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const {q = ""} = queryString.parse(location.search)

  const [formvalues, handleinputchange] = useForm({
    searchText: q, //el valor de inicio es aquel que se busco antes. Ej: Superman
  })

  const {searchText} = formvalues
  const heroesfiltered =  SearchNames(q)
  
  
  const handlesearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }
 <HeroCard />
  return (
    <>
        <h1>SuperHero Search</h1>
        <hr></hr>
        <div className='row'>
          <div className='col-5'>
              <hr></hr>
              <form onSubmit={handlesearch}>
                <input 
                  type="text"
                  placeholder='Buscar un heroe'
                  className='form-control'
                  name ="searchText"
                  value ={searchText}
                  onChange ={handleinputchange}
                />

                <button type="submit" className='btn btn-outline-primary mt-1'>
                  Search ...
                </button>
              </form>
          </div>

         <div className='col-7'>
              <h4>Results</h4>
              {(q === '' ) 
              ? <div className='alert alert-info'>Search for a hero</div>
              : (heroesfiltered.length === 0) 
                && <div className='alert alert-danger'>No results {q} </div>} 
              {heroesfiltered.map(hero => {
                return(<HeroCard key= {hero.id}
                  {...hero}
                  /> ) 
                 
              })}
          </div>

          
        </div>
    </>
  )
}
