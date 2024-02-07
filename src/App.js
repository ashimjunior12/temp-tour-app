import {useEffect,useState} from "react"
import Loading from "./Loading";
import Tours from "./Tours";



const url = 'https://course-api.com/react-tours-project';

function App() {

  const [tours,setTours] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  const fetchData = async () => {
  try {
    const resp = await fetch(url);
    const tours = await resp.json();
    setTours(tours);

  } catch (error) {
    console.log(error);
  }
  setIsLoading(false);
};

useEffect(()=>{
  fetchData()
},[]);



  if (isLoading){
    return (<main>
       <Loading />
    </main>);
  }

  if (tours.length === 0) {
    return (
      <main className="title">
        <h2>no tour left</h2>
        <button className="btn" onClick={()=>fetchData()}>refresh</button>
      </main>
    );
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>;

}
export default App;
