import { Navbar } from "../../ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { MarvelHeroesVillians } from "../pages/MarvelHeroesVillians";
import {DcHeroesVillians}  from "../pages/DCHeroesVillians";
import { SearchScreen } from "../pages/SearchScreen";
import { HeroPage } from "../components/HeroPage";


export const RoutesforHeroes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelHeroesVillians />} />
                    <Route path='dc' element={<DcHeroesVillians/>} />
                    <Route path='/' element={<MarvelHeroesVillians />} />
                    <Route path="search" element={< SearchScreen/>} />
                    <Route path="hero/:id" element={<HeroPage/>} />
                </Routes>
            </div>
        </>
    )
}
