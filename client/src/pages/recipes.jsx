import React, { useState } from 'react';
import '../components/Recipes/css/Recipes.css';
import Header from '../components/header/Header'
import '../components/header/css/Header.css'
import ChickenNoodleSoup from '../Images/ChickenNoodleSoup.jpg'

function Recipes() {
    const [cards] = useState([
        {
            title: 'Chicken Noodle Soup',
            text: ' is a comforting and classic dish made with chicken, vegetables, noodles, and flavorful broth',
            Image: ChickenNoodleSoup
        },
        {
            title: 'Creamy Garlic Chicken',
            text: 'Creamy Garlic Chicken is a delicious dish featuring tender chicken breasts cooked in a rich and flavorful creamy garlic sauce'
        },
        {
            title: 'Chicken Stir Fry',
            text: 'Chicken Stir Fry is a vibrant and flavorful dish featuring tender chicken pieces, crisp vegetables, and savory sauce, all quickly cooked together in a hot wok or skillet'
            
        },
        { 
            title: 'Shrimp Alfredo Pasta ',
            text: 'Shrimp Alfredo Pasta is a decadent and indulgent dish featuring succulent shrimp tossed in a creamy Alfredo sauce and served over a bed of perfectly cooked past'
        },
        {
            title: 'Chicken Pot Pie Soup',
            text: 'Chicken Pot Pie Soup is a comforting and hearty soup that captures all the flavors of a traditional chicken pot pie in a warm and satisfying bowl'
        },
        {
            title: 'Lemon Pie ',
            text: 'Lemon Pie is a delightful dessert that features a tangy and sweet lemon filling nestled in a flaky pie crust'
        },
        {
            title: 'Chicken and Dumplings',
            text: 'Chicken and Dumplings is a comforting and classic dish that features tender pieces of chicken, vegetables, and fluffy dumplings simmered in a savory broth'
        },
        {
            title: 'Lasagna',
            text: 'Lasagna is a delicious and hearty dish that consists of layers of wide pasta sheets, rich meat sauce, creamy cheese, and savory seasonings, baked to perfection'
        },
        {
            title: 'Enchiladas',
            text: 'Enchiladas are a delicious and flavorful Mexican dish made by filling corn or flour tortillas with a mixture of meat, cheese, beans, or vegetables, then rolling them up and covering them with a savory chili sauce'
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
                    <img src="" alt="" />
                  </div>
                    ))}
            </div>
        </div>
    </section>
</div>
);
}

export default Recipes;
