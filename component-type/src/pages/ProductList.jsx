import ProductCard from "@/component/ProductCard";
import { productListPropType } from "@/@types/propTypes";
import "@/styles/productlist.css";

ProductList.propTypes = {
    products: productListPropType,
};

export default function ProductList({ products }) {
    return (
        <div className="product_list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
