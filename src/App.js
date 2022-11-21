import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
import photo6 from "./images/photo6.png";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="body">
        <ImageCard img={photo1} name="Bill Mahoney" position="Product Owner" />
        <ImageCard img={photo2} name="Saba Cabrera" position="Art Director" />
        <ImageCard img={photo3} name="Shae Le" position="Tech Lead" />
        <ImageCard img={photo4} name="Skylah Lu" position="UX Designer" />
        <ImageCard img={photo5} name="Griff Richards" position="Developer" />
        <ImageCard img={photo6} name="Stan John" position="Developer" />
      </div>
    </div>
  );
}

export default App;
