let initialState = {
    categories: [
      { name: 'Basketball', displayName: 'Basketball' },
      { name: 'Football', displayName: 'Football' },
    ],
    products: [
      { name: 'Shoes', category: 'Basketball', price: '$100.00', inStock: 100 },
      { name: 'Basketball', category: 'Basketball', price: '$40.00', inStock: 100 },
      { name: 'Football', category: 'Football', price: '$40.00', inStock: 100 },
      { name: 'Cleats', category: 'Football', price: '$100.00', inStock: 100 },
      { name: 'Pads', category: 'Football', price: '$150.00', inStock: 100 },
    ],
    activeCategory: ''
  };

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {

        default:
            return state;
    }
}

