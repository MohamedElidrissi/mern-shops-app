import React, { Fragment, useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Alert from "@material-ui/lab/Alert";

import ShopContext from '../context/shop/shopContext';
import NearbyShop from './NearbyShop';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

function NearbyShopsList() {
  const classes = useStyles();

  const [isLocPermissionAllowed, setLocPermissionAllowed] = useState(true);
  const [coords, setCoords] = useState({ long: 0, lat: 0 });
  const {
    fetchShops,
    nearbyShops: { data, hasMore }
  } = useContext(ShopContext);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoords({
        long: coords.longitude,
        lat: coords.latitude
      })
      setLocPermissionAllowed(true);
    }, (error) => {
      if (error.code === 1) {
        // PERMISSION_ERROR
        setLocPermissionAllowed(false);
      }
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
    <Fragment>
      { !isLocPermissionAllowed && (
        <Alert severity="warning">
          Please allow location permission in your browser to see your nearby shops.
        </Alert>
      )}
      <Container component="main" className={classes.root}>
        <InfiniteScroll
          pageStart={1}
          hasMore={hasMore}
          loadMore={page => fetchShops(coords.long, coords.lat, page)}
          loader={<p style={{ textAlign: 'center' }}>Loading...</p>}
          useWindow={true}
        >
          <Grid container spacing={4}>
            {data.map(({ _id, name, picture }) => (
              <Grid item key={_id} xs={12} sm={6} md={4} lg={3}>
                <NearbyShop
                  id={_id}
                  name={name}
                  thumbnail={picture}
                />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </Fragment>
  );
}

export default NearbyShopsList;
