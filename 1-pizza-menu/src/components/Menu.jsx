// function Pizzas(props){

//     return <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.ingredients}</p>
//                 <img src={props.img} alt="pizza" />
//             </div>
// }
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function Menu(){
    return <main>
      
  {/* props => name="value" */}
        <Pizzas name={pizzaData[0].name} ingredients={pizzaData[0].ingredients}   img={pizzaData[0].photoName}  />
        <Pizzas name={pizzaData[1].name} ingredients={pizzaData[1].ingredients}   img={pizzaData[1].photoName}  />
        <Pizzas name={pizzaData[2].name} ingredients={pizzaData[2].ingredients}   img={pizzaData[2].photoName}  />
        <Pizzas name={pizzaData[3].name} ingredients={pizzaData[3].ingredients}   img={pizzaData[3].photoName}  />
        <Pizzas name={pizzaData[4].name} ingredients={pizzaData[4].ingredients}   img={pizzaData[4].photoName}  />
        <Pizzas name={pizzaData[5].name} ingredients={pizzaData[5].ingredients}   img={pizzaData[5].photoName}  />
      
    </main>
}

// props ? => this is a way to transfer the data from the parent to the child
// How to recieve the props => as patameters 

function Pizzas(props){
  return <div className="item">
    <h2 className="item-name">{props.name}</h2>
    <p className="item-ingredients">{props.ingredients}</p>
    <img src={props.img} alt={props.name} />
  </div>
}
export default Menu