import React from "react";
import { connect } from "react-redux";
import { When } from "react-if";

const CurrentCategory = ({ activeCategory }) => {
  return (
    <When condition={!!activeCategory}>
      <div>
        <h3>{activeCategory}</h3>
        <p>Category Description</p>
      </div>
    </When>
  );
};

const mapStateToProps = (state) => {
  return {
    activeCategory: state.products.activeCategory,
  };
};
export default connect(mapStateToProps)(CurrentCategory);
