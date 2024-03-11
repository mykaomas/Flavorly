import React, { useState } from 'react';
import '../components/Recipes/css/Recipes.css';
import Header from '../components/header/Header'
import '../components/header/css/Header.css'

function Recipes() {
    const [cards] = useState([
        {
            title: 'Chicken Noodle Soup',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Creamy Garlic Chicken',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Chicken Stir Fry',
            text: 'sdfbkeuwbsdkvfb'
            
        },
        { 
            title: 'Shrimp Alfredo Pasta ',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Chicken Pot Pie Soup',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Lemon Pie ',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Chicken and Dumplings',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Lasagna',
            text: 'sdfbkeuwbsdkvfb'
        },
        {
            title: 'Enchiladas',
            text: 'sdfbkeuwbsdkvfb'
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
                  <div key={i} className="card">
                    <img src="client\src\Images\Enchiladas.jpg" alt="card" />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <button className='btn'>Search</button>
                  </div>
                    ))}
            </div>
        </div>
    </section>
</div>
);
}

export default Recipes;
