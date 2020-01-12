import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ShopContext from '../context/shop/shopContext';
import NearbyShop from './NearbyShop';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

function NearbyShopsList() {
  const classes = useStyles();

  const [coords, setCoords] = useState({ long: 0, lat: 0 });
  const { fetchShops, nearbyShops } = useContext(ShopContext);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoords({
        long: coords.longitude,
        lat: coords.latitude
      })
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (coords.long && coords.lat) {
      fetchShops(coords.long, coords.lat);
    }
    // eslint-disable-next-line
  }, [coords]);

  return (
    <Container component="main" className={classes.root}>
      <Grid container spacing={4}>
        {nearbyShops.map(({ _id, name, picture }) => (
          <Grid item key={_id} xs={12} sm={6} md={4} lg={3}>
            <NearbyShop
              id={_id}
              name={name}
              thumbnail={picture}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NearbyShopsList;
