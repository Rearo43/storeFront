import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Products = (props) => {
  props = {
    store: {
      products: [
        {
          name: "AAA",
          category: "ACTIVE",
          description: "AAAD",
        },
        {
          name: "BBB",
          category: "ACTIVE",
          description: "BBBD",
        },
        {
          name: "CCC",
          category: "ACTIVE",
          description: "CCCD",
        },
      ],
      activeCategory: "ACTIVE",
    },
  };

  const products = props.store.products.filter(
    (product) => product.category === props.store.activeCategory
  );
  console.log(products);

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.name} sm={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateProps = (state) => ({
  products: state.products,
});

export default connect(mapStateProps)(Products);
