import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import { category } from "../../store/products";

const Categories = (props) => {
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
  };
};

const mapDispatchToProps = { category };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
