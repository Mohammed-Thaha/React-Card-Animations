import Card from "./components/Card";
import nature1 from "./assets/1.jpg";
import nature2 from "./assets/2.jpg";
import nature3 from "./assets/3.jpg";
import nature4 from "./assets/4.jpg";
import "./App.css";
const cardData = [
    {
      image: nature1,
      title: "Nature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ducimus velit enim possimus quibusdam facere reprehenderit mollitia dolore fugiat illo."
    },
    {
      image: nature2,
      title: "Nature 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ducimus velit enim possimus quibusdam facere reprehenderit mollitia dolore fugiat illo."
    },
    {
      image: nature3,
      title: "Nature 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ducimus velit enim possimus quibusdam facere reprehenderit mollitia dolore fugiat illo."
    },
    {
      image: nature4,
      title: "Nature 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ducimus velit enim possimus quibusdam facere reprehenderit mollitia dolore fugiat illo."
    },
  ];
  
  const App = () => {
    return (
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    );
  };
  

export default App;
