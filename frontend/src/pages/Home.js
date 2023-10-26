import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/home.css';
import AddFruit from "../components/AddFruit";
import Signup from "../components/Signup";

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AddFruit/>
      <Signup/>
    </>
  );
}

export default Home;