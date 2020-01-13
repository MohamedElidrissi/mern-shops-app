import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ShopContext from '../context/shop/shopContext';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.error.main,
  }
}));

function PreferredShop({ id, name, thumbnail }) {
  const classes = useStyles();

  const { unlikeShop } = useContext(ShopContext);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={thumbnail}
        title={`${name}'s Picture`}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          className={classes.button}
          onClick={() => unlikeShop(id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

PreferredShop.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default PreferredShop;
