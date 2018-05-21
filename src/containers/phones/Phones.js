import { ShoppingCart } from '@material-ui/icons/es/index';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  FlatButton,
  RaisedButton
} from 'material-ui';
import * as R from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchPhones,
  loadMorePhones
} from '../../actions';
import { getPhones } from '../../selectors/selectors';
import styles from './phones.module.css';

class Phones extends Component {
  renderPhone = (phone, index) => {
    const title = <div className={styles.title}>
      <Link to='/' className={styles['title-name']}>{phone.name}</Link>
      <p className={styles['title-price']}>${phone.price}</p>
    </div>;
    const shortDescription = `${R.take(80, phone.description)}...`;
    
    return <Card key={index} className={styles['grid-item']}>
      <CardMedia style={{ padding: '16px 16px 0' }}>
        <img src={phone.image} alt={phone.name}/>
      </CardMedia>
      <CardHeader title={title} textStyle={{
        display: 'block',
        paddingRight: 0
      }}/>
      <CardText>{shortDescription}</CardText>
      <CardActions>
        <RaisedButton primary={true} icon={<ShoppingCart/>}/>
        <Link to={`phones/${phone.id}`}>
          <FlatButton secondary={true} label='More info'/>
        </Link>
      </CardActions>
    </Card>;
  };
  
  componentDidMount() {
    this.props.fetchPhones();
  }
  
  render() {
    const { phones, loadMorePhones } = this.props;
    return <div>
      <div className={styles.grid}>
        {phones.map((phone, index) => this.renderPhone(phone, index))}
      </div>
      <div className={styles['load-more-container']}>
        <RaisedButton
          label='Load more'
          primary={true}
          onClick={loadMorePhones}/>
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
