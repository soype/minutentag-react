import React from 'react'
import beer from '../../../icons/Beer.png'
import wine from '../../../icons/Wine-glass.png'

function Categories() {


    const selectButton = (event) => {
        document.querySelectorAll(".category-button").forEach(btn => {
            btn.classList = "category-button";
        })
        event.target.classList = "category-button category-button-selected"
    }

    

  return (
    <div className="categories">
        <div className="category-subtitle">
          <h2>Drink Category</h2>
          <a href="" className="see-all">See All</a>
        </div>
        <div className="categories-buttons">
          <button className="category-button" onClick={selectButton}>All</button>
          <button className="category-button category-button-selected" onClick={selectButton}>
            <img src={beer} width="23px" alt="" /> Beer
          </button>
          <button className="category-button" onClick={selectButton}>
            <img src={wine} width="23px" alt="" /> Wine
          </button>
        </div>
      </div>
  )
}

export default Categories