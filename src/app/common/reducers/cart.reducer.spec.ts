import {cartProductsWithBonuses} from './cart.reducer';

describe('cart selectors', () => {
  const products = [{title: 'Nokia', price: 2},
    {title: 'Asus', price: 4}, {title: 'Apple', price: 3}];

  const user = {
    bonuses: 2
  };

  it('test', () => {
    expect(cartProductsWithBonuses.projector(products, user))
      .toEqual(products
        .map(product => ({...product, price: product.price * user.bonuses})));
  });
});
