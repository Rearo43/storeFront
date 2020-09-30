import React from 'react';
import {connect} from 'react-redux';

function CurrentCat(props) {
    return (
        <h1>Current Category {props.activeCategory}</h1>
    )
}

const mapStateToProps = state => {
    return {
        activeCategory: state
    }
}