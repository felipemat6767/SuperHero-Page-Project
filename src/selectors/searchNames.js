
import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
export const SearchNames = (name ="") => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.setInfo()
    }, [])

    if(name ===""){
        return []
    }

    
     //name = name.toLowerCase()
     //return heroes.filter(hero => hero.name.toLowerCase().includes(name))
     return store.heroesinfo.filter(hero => hero.superhero === name)

}