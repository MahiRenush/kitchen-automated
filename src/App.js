import React from 'react'
import full from "../src/images/full.png";
import half from "../src/images/half.png";
import less from "../src/images/less.png";
import foods from "./foods.json"
import Menu from"./images/menu.svg"

function findimage (food) {
  if(food.current <= food.threshold ){
    return [less, 0];
  }
  if(food.current > food.threshold && food.current < food.max){
    return [half, 1];
  }
  if(food.current == food.max){
    return [full, 2]
  }
}

export default function App () {
  return (
    <body>
      <header>
        <div className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar space'>
          <h3 className='font-weight-bold'>Kitchen Automation App</h3>
          {/* <Menu/> */}
        </div>
      </header>
      <div>
          <div class="card-group grp row row-cols-1 row-cols-md-3 ">
          {foods.map((food) => {
            const image = findimage(food);
            const backgroundColor = image[1]==0? '#f5cdcd': '#fff';
              return(
              <div className='col'>
                  <div class="card obj" style={{backgroundColor}}>
                    <img src={image[0]} class="card-img-top img" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title text-uppercase">{food.title}</h5>
                      <p class="card-text">
                        <p className='fst-italic text-uppercase'>threshold: {food.threshold}&nbsp;
                        Current value: {food.current}&nbsp;</p>
                      </p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
              </div>)
            })}
          </div>
      </div>
    </body>
  )
}