import React,{useState} from 'react';
import './Home.css';
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
const Home = () => {
  const[category,setCategory]=useState('all');
  return (
    <main>
        <HomeHeader/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </main>
  )
}

export default Home
