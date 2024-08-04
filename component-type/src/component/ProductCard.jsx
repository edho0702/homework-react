import CartButton from "./CartButton";
import { productPropType } from "@/@types/propTypes";
import { formatCurrency } from "@/utils/formatCurrency";

ProductCard.propTypes = {
    product: productPropType.isRequired,
};

export default function ProductCard({ product }) {
    return (
        <div className="product_card">
            <div className="product_img">
                <img src={product.imgUrl} alt="" />
            </div>
            <div className="product_info">
                <p className="delivery">일반배송</p>
                <h3 className="product_name">{product.name}</h3>
                <p className="product_des">{product.info}</p>
                <p className="original_price">
                    {formatCurrency(product.originalPrice)}원
                </p>
                <p className="rate">
                    {product.rate}%
                    <span className="rate_price">
                        {formatCurrency(
                            `${product.originalPrice}` -
                                (`${product.originalPrice}` *
                                    `${product.rate}`) /
                                    100
                        )}
                        원
                    </span>
                </p>
                <a className="review_button" href="product">
                    <img src="src/image/review_button.svg" alt="" />
                    <p className="review_count">15</p>
                </a>
            </div>

            <CartButton />
        </div>
    );
}
