import React, { Fragment, useEffect, useContext } from 'react';
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

  const {
    obtainGeolocation,
    fetchNextNearbyShops,
    position,
    error,
    nearbyShops: { data, hasMore }
  } = useContext(ShopContext);

  useEffect(() => {
    obtainGeolocation();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      { error && <Alert severity="error">{error}</Alert> }
      <Container component="main" className={classes.root}>
        <InfiniteScroll
          pageStart={1}
          hasMore={hasMore}
          loadMore={page => fetchNextNearbyShops(position.long, position.lat, page)}
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
