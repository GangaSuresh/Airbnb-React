import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import Card from './componets/Card'
import data from './data'

function App() {
  
  const cards =data.map(item =>{
    return (
      <Card
          key={item.id}
          item={item}
     />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <section className='cards-list'>
     {cards}
     </section>
  
    </div>
  );

}

export default App;
