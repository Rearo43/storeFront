import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import  category from "../../store/products";

const Categories = (props) => {
  console.log('CATEGORY_PROP', props);
  return (
    <section>
      <div>
        <h2>Browse our Categories</h2>

        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          {props.categories.map((cat) => (
            <Button
              key={cat._id}
              color="primary"
              onClick={() => props.category(cat.name)}
            >
              {cat.displayName || cat.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {/* {props.products.map((prod) => (
        <div>{prod.name}</div>
      ))} */}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
  };
};
const mapDispatchToProps = { category };
console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
