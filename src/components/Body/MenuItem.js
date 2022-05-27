import React from 'react';
import {Card , CardImg , CardImgOverlay ,CardBody,CardTitle} from 'reactstrap';




const MenuItem = props => {

     return (
          <div>
               <Card style={{margin:"10px"}}>
                    <CardBody>
                         <CardImg 
                          width="100%" 
                          alt={props.dishes.name} 
                          src={props.dishes.image}
                          style={{opacity:"0.5"}}/>
                         <CardImgOverlay>
                              <CardTitle 
                              style={{cursor:"pointer"}} 
                              onClick={props.DishSelect}>
                              {props.dishes.name}
                              </CardTitle>
                         </CardImgOverlay>
                    </CardBody>
               </Card>
          </div>
     );
};

export default MenuItem;