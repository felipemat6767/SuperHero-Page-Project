import React, { useMemo } from 'react'
import { GetHerobyId } from '../../selectors/getHerobyId'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import {} from "../../"
export const HeroPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const hero =  GetHerobyId(id)
  const handleReturn = () => {
    navigate(-1)
  }

  if(!hero) {return <Navigate to ="/marvel"/> }
 
  const {id_name, superhero, alter_ego, publisher, first_appearance, character} = hero
  const imagepath = `../images/imagesheroesandvil/${id}.jpg` 
  return (
    <div className='row mt-5'>
        <div className='col-4'>
        <img src={ imagepath }
          alt = {superhero}
          className="img-thumbnail"
          />  
        </div>
        <div className='col-8'>
          <h3>{superhero}</h3>
          <ul className='list-group'>
              <li className='list-group-item'><b>Alter_ego: </b>{alter_ego}</li> 
              <li className='list-group-item'><b>Publisher: </b>{publisher}</li> 
              <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li> 
          </ul>
          <h5 className='mt-4'>Characters</h5>
          <p>{character}</p> 

          <button 
          className='btn btn-outline-info'
          onClick={handleReturn}
          >Go Back</button>
        </div>
    </div>
  )
}
