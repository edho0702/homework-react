import ProductList from "./pages/ProductList";
import "@/styles/reset.css";
import "@/styles/cartbutton.css";
import "@/styles/productcard.css";
import products from "@/data/products";

function App() {
    return (
        <div className="App">
            <ProductList products={products} />
        </div>
    );
}

export default App;
