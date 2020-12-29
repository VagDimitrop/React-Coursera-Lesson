import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


function renderDish(dish) {
  if (dish != null) {
    return(
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  else {
    return(
      <div></div>
    )
  }
}



export default renderDish;
