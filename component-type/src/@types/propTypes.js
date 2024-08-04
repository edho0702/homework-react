import PropTypes from "prop-types";

export const productPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    ratio: PropTypes.number,
});

export const productListPropType =
    PropTypes.arrayOf(productPropType).isRequired;
