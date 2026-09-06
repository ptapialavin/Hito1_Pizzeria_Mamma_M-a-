import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=640&q=80"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "chorizo español", "parmesano", "aceituna"]}
            img="https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=640&q=80"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=640&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;