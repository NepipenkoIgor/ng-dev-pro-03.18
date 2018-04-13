import {ProductFilterPipe} from './product-filter.pipe';


describe('Pipe', () => {

  const products = [{title: 'Nokia'}, {title: 'Asus'}, {title: 'Apple'}];

  it('test', () => {
    const productFilterPipe = new ProductFilterPipe();
    expect(productFilterPipe
      .transform(products, 'nok').length).toEqual(1);
  });
});
