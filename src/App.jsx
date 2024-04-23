
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeData from './componant/CoffeeData';

function App() {

  const coffees =useLoaderData();


  return (
    <>
      
      <h1 className='text-6xl font-semibold'>Total Item {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-3'>
        {
          coffees.map(coffee=>
             <CoffeeData key={coffee._id} coffee={coffee}></CoffeeData>)
        }
      </div>
    </>
  )
}

export default App
