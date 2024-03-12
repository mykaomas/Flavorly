import React, { useState } from 'react';
import '../components/Recipes/css/Recipes.css';
import Header from '../components/header/header'
import '../components/header/css/Header.css'
import ChickenNoodleSoup from '../Images/ChickenNoodleSoup.jpg'
import CreamyGarlicChicken from '../Images/CreamyGarlicChicken.jpg'
import ChickenStirFry from '../Images/ChickenStirFry.jpg'
import ShrimpAlfredoPasta from '../Images/ShrimpAlfredoPasta.jpg'
import  ChickenPotPieSoup from '../Images/ChickenPotPieSoup.jpg'
import LemonPie from '../Images/LemonPie.jpg'
import ChickenDumplingSoup from '../Images/ChickenDumplingSoup.webp'
import Lasagna from '../Images/Lasagna.jpg'
import Enchiladas from '../Images/Enchiladas.jpg'

function Recipes() {
    const [cards] = useState([
        {
            title: 'Chicken Noodle Soup',
            text: ' is a comforting and classic dish made with chicken, vegetables, noodles, and flavorful broth',
            image: ChickenNoodleSoup
        },
        {
            title: 'Creamy Garlic Chicken',
            text: 'Creamy Garlic Chicken is a delicious dish featuring tender chicken breasts cooked in a rich and flavorful creamy garlic sauce',
            image: CreamyGarlicChicken
        },
        {
            title: 'Chicken Stir Fry',
            text: 'Chicken Stir Fry is a vibrant and flavorful dish featuring tender chicken pieces, crisp vegetables, and savory sauce, all quickly cooked together in a hot wok or skillet',
            image: ChickenStirFry
            
        },
        { 
            title: 'Shrimp Alfredo Pasta ',
            text: 'Shrimp Alfredo Pasta is a decadent and indulgent dish featuring succulent shrimp tossed in a creamy Alfredo sauce and served over a bed of perfectly cooked past',
            image: ShrimpAlfredoPasta
        },
        {
            title: 'Chicken Pot Pie Soup',
            text: 'Chicken Pot Pie Soup is a comforting and hearty soup that captures all the flavors of a traditional chicken pot pie in a warm and satisfying bowl',
            image: ChickenPotPieSoup
        },
        {
            title: 'Lemon Pie ',
            text: 'Lemon pie is a tangy and refreshing dessert made with a buttery crust filled with a smooth lemon filling',
            image: LemonPie
        },
        {
            title: 'Chicken & Dumplings Soup',
            text: 'Chicken and dumplings is a comforting and hearty dish that features tender chunks of chicken simmered in a savory broth with vegetables like carrots, celery, and onions',
            image: ChickenDumplingSoup
        },
        {
            title: 'Lasagna',
            text: 'Lasagna is a popular Italian dish that consists of layers of wide, flat pasta sheets, rich tomato sauce, creamy béchamel sauce, flavorful meat (such as ground beef or sausage), and melted cheese, typically mozzarella and Parmesan',
            image: Lasagna
        },
        {
            title: 'Enchiladas',
            text: 'Enchiladas are a traditional Mexican dish made by filling corn tortillas with a variety of ingredients such as seasoned meat (like chicken, beef, or pork), beans, cheese, and vegetables',
            image: Enchiladas
        },
]);

return (
<div>
    <Header />
    <section>
        <div className="container">
             <h1>RECIPES</h1>
             <div className="cards">
                {cards.map((card, i) => (
                  <div key={i} className="card" style={{ backgroundImage: `url(${card.image})` }}>
                    <p>{card.text}</p>
                    <h3>{card.title}</h3>
                  </div>
                    ))}
            </div>
        </div>
    </section>
</div>
);
}

export default Recipes;
