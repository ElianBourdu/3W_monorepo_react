import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/home.css';
import AddFruit from "../components/AddFruit";
import AgricultorSearchResult from "../components/AgricultorSearchResult";

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AgricultorSearchResult/>
      {/*<AddFruit/>*/}
    </>
  );
}

export default Home;