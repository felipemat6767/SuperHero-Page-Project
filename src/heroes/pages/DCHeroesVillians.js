import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import { HeroList } from '../components/HeroList'
import { Herofiltered } from '../Filters/Heroesfilt'
import { NamesAtoZ, NamesZtoA } from '../Filters/Namefilt'
import { Filtercopy } from '../helpers/FilterbyType'

export const DcHeroesVillians = () => {
  const { store } = useContext(Context)
  return (
    <div>
      <div>
        <Filtercopy />
      </div>

      <div className='d-flex row  facet_sidebar'>
        <div className='col-1 fa'></div>
        <div className='col-11 col-sm-12 col-md-12'> {(store.category === "Heroes") ? <Herofiltered type="DC-Heroes" /> : (store.category === "Villians") ? <Herofiltered type="DC-Evil"/> :(store.category === "AtoZ") ? <NamesAtoZ category="DC Comics"/> : (store.category === "ZtoA") ? <NamesZtoA category="DC Comics"/>: <HeroList company={"DC Comics"} />}
        </div >
      </div>
    </div >

  )
}
