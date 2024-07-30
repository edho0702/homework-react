import cart from "../images/cart.svg";

export default function CartButton() {
    return (
        <button className="cart-button">
            <img src={cart} alt="" width={24} height={24} />
            <p>담기</p>
        </button>
    );
}
