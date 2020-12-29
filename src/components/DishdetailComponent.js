import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


function renderDish(dish) {

  if (dish != null) {

    return(
      <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  }
  else {
    return(
      <div></div>
    )
  }
}

function renderComments(dish) {

  if (dish != null) {

    const list = dish.comments.map((comment)=> {
      return(
          <li key={comment.id} >
              <div>
                  <p>{comment.comment}</p>
                  <p>--{comment.author},
                  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </div>
          </li>

      )
    })

    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {list}
            </ul>
        </div>
    )
  }
  else {
    return(
      <div></div>
    )
  }
}


export default renderComments;
