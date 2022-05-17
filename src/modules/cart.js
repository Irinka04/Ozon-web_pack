'use strict';

const cartLogic = () => {
  const cart = document.querySelector('.cart');
  const cartBtn = document.getElementById('cart');
  const cartCloseBtn = cart.querySelector('.cart-close');

  const cartToggle = () => {
    cart.classList.toggle('hidden');
  };

  cartBtn.addEventListener('click', cartToggle);
  cart.addEventListener('click', ({ target }) => {
    if (target === cartCloseBtn || target === cart) cartToggle();
  });
};

export default cartLogic;
