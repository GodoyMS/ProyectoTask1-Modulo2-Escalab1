import './App.css';
import Header from './Components/Header/Header';
import ListCard from './Components/ListCard/ListCard';
import FooterComponent from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4  p-4' >
        <ListCard>
      
        </ListCard>
      


      </div>
      <FooterComponent/>   
</div>
  );
}

export default App;
