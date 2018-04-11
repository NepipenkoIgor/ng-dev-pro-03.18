interface IProduct {
  _id: string;
  title: string;
  price: string;
  picture: string;
}

interface ICartProduct extends IProduct {
  count: number;
}
