import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
export const GetHerobyId = (id) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.setInfo()
    }, [])
    
    return store.heroesinfo.find(hero => hero.id_name === id)
}