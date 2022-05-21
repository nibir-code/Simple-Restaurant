import React , {Component} from 'react';
import DISHES from '../../Data/Dishes.js';
import MenuItem from './MenuItem.js';

// eslint-disable-next-line no-unused-vars
class Menu extends Component {
     state ={
          dishes : DISHES
     }
     render() {
          const menu = this.state.dishes.map(item =>{
               return(
                    <MenuItem dishes={item} key={item.id}/>
               )
          })
          return (
               <div className="container">
                    <div className="row">
                         <div className="col-6">
                              {menu}
                         </div>
                    </div>
               </div>
          )
     }

} 
export default Menu;