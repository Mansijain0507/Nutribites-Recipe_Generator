import React from 'react';
import './recipe.styles.css';

export const Recipe = ({ title, calories, image, ingredients, site }) => (

  //  let { recipe } = this.props;

  <div className="recipe">
    <h1 className="recipe_title">{title}</h1>
    <div className="image_div">
      <img className="image" src={image} alt="" />
    </div>
    <p className="calories">Calories: {parseInt(calories)} Kcal</p>
    <h2>Ingredients:</h2>
    <ul className="ingredients">
      {ingredients.map((ingredient, index) => (
        <li className="ingredient" key={index}>
          <i className="fas fa-caret-right" /> {ingredient.text}
        </li>
      ))}
    </ul>

    <p><a href={site}><button className="site-button">View link</button></a>
    </p>
  </div>

);
