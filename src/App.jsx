import logo from './logo.svg';
import './App.css';
import Pokedex from './pokecard';
import CustomerInformation from './customer';
import Card from './building-a-layout';
import Planets from './planet-to-li';
import RenderList from './object-to-li';


//const data = {
  ///image: '../../.learn/assets/Dylan.png?raw=true',
  //cardTitle: 'Bob Dylan',
 // cardDescription:
   // 'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
 // button: {
   // url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
   // label: 'Go to wikipedia',
 // },
//};




function App() {
  return (
    //<div>
      //<RenderList/>
   // </div>
   // <div> 
     // <Planets/>
   // </div>
   //<div>
      // <Card
      //image={data.image}
      //title={data.cardTitle}
      //description={data.cardDescription}
     // buttonUrl={data.button.url}
     // buttonLabel={data.button.label}
   // />
   // </div>
  <div>
   <Pokedex />
  </div>
  //  <div>
 //   <CustomerInformation />
  //</div>
  );
}

export default App;
