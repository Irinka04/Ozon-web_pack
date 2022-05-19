import getData from "./getData";
import renderGoods from "./renderGoods";
import { minPriceFilter } from "./filters";
import { maxPriceFilter } from "./filters";

const price = () => {
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');
    const minInputTimeOut = setTimeout(() => {
        minPrice.addEventListener('input', (e) => {
            const minValue = e.target.value;
            const maxValue = maxPrice.value;
            getData().then((data) => {
                renderGoods(minPriceFilter(data, minValue, maxValue));
            });
        });
    }, 2000); 

    const maxInputTimeOut = setTimeout(() => {
        maxPrice.addEventListener('input', (e) => {
            const minValue = minPrice.value;
            const maxValue = e.target.value;
            getData().then((data) => {
                renderGoods(maxPriceFilter(data, minValue, maxValue));
            });
        });
    }, 2000); 
};

export default price;