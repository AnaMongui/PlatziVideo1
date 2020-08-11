import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
// import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

  const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi Lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Tendencia">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales Platzi Video">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
    </div>
  );
  export default App;
