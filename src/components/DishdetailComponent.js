import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends React.Component {


  renderDish(dish) {

      if (dish != null) {

        return(
            <div className="row col-12 col-md-5 m-1">
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

    renderComments(dish) {

      if (dish != null) {

        const list = dish.comments.map((comment)=> {
          return(
            <li key={comment.id} >
                <p>{comment.comment}</p>
                <p>--{comment.author},
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
          )
        })

        return(
            <div className="row col-12 col-md-5 m-1">
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

    render() {
      const { dish } = this.props;
      if (dish != null) {
        return(
          <div className="row">
            {this.renderDish(dish)}
              <ul className="list-unstyled">
                {this.renderComments(dish)}
              </ul>
          </div>
        );
      } else {
        return(
          <div></div>
        );
      }
    }
  }

export default DishDetail;
