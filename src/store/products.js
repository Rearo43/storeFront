let initialState = {
    categories: [
      { name: 'electronics', displayName: 'Electronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'ACTIVE',
};
  
  export default (state = initialState, action) => {
    let { type, payload } = action;
    console.log(type, payload);
  
    switch (type) {
      case 'CATEGORY':
  
        return {...state, activeCategory: payload}
  
      default:
        return state;
    }
  };
  
  export const changeCategory = (name) =>  {
    return {
      type: 'CHANGE',
      payload: name,
    }
  }
  
  export const category = name => {
    return {
      type: 'CATEGORY',
      payload: name,
    }
  }

// let initialState = {
//     categories: [
//       { name: 'Basketball', displayName: 'Basketball' },
//       { name: 'Football', displayName: 'Football' },
//     ],
//     products: [
//       { name: 'Shoes', category: 'Basketball', price: '$100.00', inStock: 100 },
//       { name: 'Basketball', category: 'Basketball', price: '$40.00', inStock: 100 },
//       { name: 'Football', category: 'Football', price: '$40.00', inStock: 100 },
//       { name: 'Cleats', category: 'Football', price: '$100.00', inStock: 100 },
//       { name: 'Pads', category: 'Football', price: '$150.00', inStock: 100 },
//     ],
//     activeCategory: ''
//   };

// export default (state = initialState, action) => {
//     const {type, payload} = action;

//     switch(type) {

//         default:
//             return state;
//     }
// }

