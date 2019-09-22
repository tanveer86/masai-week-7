import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Deals from './components/Deals';
import Offers from './components/Offers';
import Best from './components/Best';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      bestProducts: [{name:'Wrath Block Tshirt', 
                      price: 399, 
                      image: 'https://rukminim1.flixcart.com/image/462/554/jwjkh3k0/t-shirt/x/v/y/xxl-chill-out-turquoise-white-colour-blocked-wrath-original-imafggssv2gbc5bd.jpeg?q=50'},
                     {name:'Solid Polo T-Shirt', 
                      price: 499, 
                      image: 'https://rukminim1.flixcart.com/image/462/554/jm3ro280/t-shirt/9/h/f/m-style-tshirt-try-this-original-imaf8zxukgz3cjhq.jpeg?q=50',},
                     {name: 'Printed Tshirt', 
                      price: 323, 
                      image: 'https://rukminim1.flixcart.com/image/462/554/jr9iwsw0/t-shirt/v/c/d/s-tnv-rnfulabstract1-tripr-original-imafd2huzeffqyyr.jpeg?q=50'},
                      {name: 'Color Hooded', 
                      price: 449, 
                      image: 'https://rukminim1.flixcart.com/image/462/554/jw6pifk0/t-shirt/e/v/z/m-61ywn-lewel-original-imafgxd7dfg7uub2.jpeg?q=50'},
                     {name: 'Self Design Tshirt',
                     price: 399,
                     image: 'https://rukminim1.flixcart.com/image/462/554/jatym4w0/t-shirt/t/j/w/m-v-neck-try-this-original-imafyyjzzzrz28bu.jpeg?q=50'},
                     {name: 'Casual Half Sleev',
                     price: 500,
                     image: 'https://rukminim1.flixcart.com/image/462/554/j23lqq80/top/y/q/6/s-gr5206-pink-harpa-original-imaetgyvfymyuzgt.jpeg?q=50'},
                     {name: 'Casual Sleeve Self',
                      price: 503,
                    image: 'https://rukminim1.flixcart.com/image/462/554/jv5k2a80/top/t/g/f/xl-lacetop-derris-original-imafc6ne5ekepp5f.jpeg?q=50'},
                    {name: 'Party Flared Sleev',
                    price: 349,
                    image: 'https://rukminim1.flixcart.com/image/462/554/jlo1tow0/top/c/j/h/s-tieprl-alfa-fashion-original-imaf8ryeftnhz9g8.jpeg?q=50'},
                    {name: 'Checkered Top',
                    price: 299,
                    image: 'https://rukminim1.flixcart.com/image/462/554/jxz0brk0/top/z/z/z/l-t0623-chimpaaanzee-original-imafgb9atcu24tz6.jpeg?q=50'},
                    {name: 'Casual 3/4 Sleev',
                    price: 299,
                    image: 'https://rukminim1.flixcart.com/image/462/554/jvv9zm80/top/x/6/d/l-fb01-silkova-original-imafgnzubfhet7yt.jpeg?q=50'},
                    {name: 'Ziva Skinny Pants',
                    price: 1234,
                    image: 'https://rukminim1.flixcart.com/image/462/554/jxz0brk0/jean/y/g/2/36-115-2-3-36-ziva-fashion-original-imafgy3wbs8hnnnk.jpeg?q=50'},
                    {name: 'Billion 3 Tshirt',
                    price: 699,
                    image: 'https://rukminim1.flixcart.com/image/462/554/j7ksia80/t-shirt/k/w/6/m-bts028-billion-original-imaexs9yxvayy3d3.jpeg?q=50'}
      ]
    }
  }

  render(){
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Categories />
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <Deals />
        </div>
        <div>
          <Offers />
        </div>
        <div>
          <Best productsDetails={this.state.bestProducts}/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
} 

export default App;
