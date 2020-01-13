import React, { Fragment, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ShopContext from '../context/shop/shopContext';
import PreferredShop from "./PreferredShop";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

function PreferredShopsList() {
  const classes = useStyles();

  const { fetchPreferredShops, preferredShops } = useContext(ShopContext);

  useEffect(() => {
    fetchPreferredShops();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Container component="main" className={classes.root}>
        <Grid container spacing={4}>
          {preferredShops.map(({ _id, name, picture }) => (
            <Grid item key={_id} xs={12} sm={6} md={4} lg={3}>
              <PreferredShop
                id={_id}
                name={name}
                thumbnail={picture}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default PreferredShopsList;
