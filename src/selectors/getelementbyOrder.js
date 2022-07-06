import React, { useContext, useEffect } from 'react'
import { HeroCard } from '../heroes/components/HeroCard'

import { Context } from '../store/appContext'
const validtype = ["Marvel Comics", "DC Comics"]

export const GetelementbyCategory = (category) => {
    useEffect(() => {
        actions.setInfo()
    }, [])

    const { store, actions } = useContext(Context)
    if (!validtype.includes(category)) {
        throw new Error(`${category} is not a valid type`)
    }
    return store.heroesinfo.filter(element =>
        element.publisher === category
    )
}

export const getElementbyAtoZ = (filteredarray) => {
  
    return filteredarray.sort((a, b) => a.superhero < b.superhero ? 1 : a.superhero > b.superhero ? -1 : 0).map((item, i) => <HeroCard key={item.name} {...item} />)

}

export const getElementbyZtoA = (filteredarray) => {
   
    return filteredarray.sort((a, b) => a.superhero > b.superhero ? 1 : a.superhero < b.superhero ? -1 : 0).map((item, i) => <HeroCard key={item.name} {...item} />)

}