import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/home.css';
import AddFruit from "../components/AddFruit";
import Signup from "../components/Signup";
import Login from "../components/login";

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AddFruit/>
      <Signup/>
      <Login/>
    </>
  );
}

export default Home;