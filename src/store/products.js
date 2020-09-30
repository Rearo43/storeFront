let initialState = {
  categories: [
    {
      name: "Electronics",
      displayName: "Electronics",
      description: "The Best",
    },
    { name: "Food", displayName: "Food", description: "The Healthiest" },
    { name: "Clothing", displayName: "Clothing", description: "Most Stylish" },
  ],
  products: [
    { name: "TV", category: "Electronics", price: 699.0, inStock: 5 },
    { name: "Radio", category: "Electronics", price: 99.0, inStock: 15 },
    { name: "Shirt", category: "Clothing", price: 9.0, inStock: 25 },
    { name: "Socks", category: "Clothing", price: 12.0, inStock: 10 },
    { name: "Apples", category: "Food", price: 0.99, inStock: 500 },
    { name: "Eggs", category: "Food", price: 1.99, inStock: 12 },
    { name: "Bread", category: "Food", price: 2.39, inStock: 90 },
  ],
  activeCategory: "Store"
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log('TYPE+PAYLOAD', type, payload);

  switch (type) {
    case "CATEGORY":

      return { ...state, activeCategory: payload};

    default:
      return state;
  }
};

export const category = (name) => {
  console.log("NAMEEE", name);
  return {
    type: "CATEGORY",
    payload: name,
  };
};
