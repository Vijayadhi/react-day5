import React from 'react'
import Project from './Card'

function App() {

  let data = [
    {
      title: "Tajmahal",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Taj_Mahal_2012.jpg",
      description: "The Taj Mahal is a white marble mausoleum built by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal in Agra, India. It is a UNESCO World Heritage Site and one of the New 7 Wonders of the World, reflecting the fusion of Indo-Islamic and Mughal architectural styles.",
    },
    {
      title: "Lamborghini Urus",
      image: "https://media.evo.co.uk/image/private/s--pytM9OdS--/v1606220409/evo/2020/11/Lamborghini%20Urus%20review%20new-5.jpg",
      description: "The design of the Urus S retains the muscular surfaces and confident lines of the Urus but with even greater sculptural definition to its shape. Both the front and rear bumpers present a more emphatic design, along with the new wheel arches and a carbon fiber painted hood.",
    },
    {
      title: "Happy Birthday Royal Enfield- Celebrating 120",
      image: "http://livingwithgravity.com/wp-content/uploads/2021/12/royal-enfield-120th-anniversary-650-twins-5.jpg",
      description: "Royal Enfield is an Indian multinational motorcycle manufacturing company, headquartered in Chennai.The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production. The company operates manufacturing plants in Chennai in India.",
    },

  ]
  return <>

    <div className="container">

      {/* <!-- Page Heading --> */}
      <h1 className="my-4">Page Heading
      </h1>
      <div className="row">
      {
        data.map((e,i)=>{
          return <Project data={e} key={i}/>
        })
      }          
      </div>
    </div>

  </>

}

export default App