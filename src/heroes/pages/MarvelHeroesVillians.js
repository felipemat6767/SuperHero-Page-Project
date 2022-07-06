import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import { HeroList } from '../components/HeroList'
import { Herofiltered } from '../Filters/Heroesfilt'
import { NamesAtoZ, NamesZtoA } from '../Filters/Namefilt'
import { Filtercopy } from '../helpers/FilterbyType'

export const MarvelHeroesVillians = () => {
  const { store } = useContext(Context)
  return (
    <div>
      <div>
        <Filtercopy />
      </div>

      <div className='d-flex row'>
        <div className='col-1'></div>
        <div className='col-11 col-sm-12 col-md-12'> {(store.category === "Heroes") ? <Herofiltered type="Marvel-Heroes" /> : (store.category === "Villians") ? <Herofiltered type="Marvel-Evil"/> :(store.category === "AtoZ") ? <NamesAtoZ category="Marvel Comics"/> : (store.category === "ZtoA") ? <NamesZtoA category="Marvel Comics"/>: <HeroList company={"Marvel Comics"} />}
        </div >
      </div>
    </div >

  )
}

