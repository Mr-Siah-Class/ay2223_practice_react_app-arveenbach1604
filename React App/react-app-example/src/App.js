import React from 'react';
import './App.css';


import {
    Route,
    useParams,
    Routes,
    BrowserRouter
} from "react-router-dom";




import HomeScreen from './Screens/HomeScreen';
import ProductsScreen from './Screens/ProductsScreen';
import NoScreen from './Screens/NoScreen';
import FooterBar from './Components/FooterBar';
import SingleProductScreen from './Screens/SingleProductScreen';
import NavBar from './Components/NavBar';

const ProductIdWrapper = () => {
    const { productId } = useParams();
    return <SingleProductScreen productId={productId} />;
  };

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <NavBar />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route path="/products" element={<ProductsScreen />} />
                        <Route path="/products/:productId" element={<ProductIdWrapper/>} />
                        <Route path="*" element={<NoScreen />} />
                    </Routes>
                </BrowserRouter>

                <FooterBar />
            </div>
        );
    }
}

export default App;