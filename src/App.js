import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Apartment from "./components/Apartment";
// import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Apartment />
      {/* <ContactForm /> */}
      <Contact />
    </div>
  );
}

export default App;
