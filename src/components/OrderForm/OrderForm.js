import React, {Component} from 'react';
import InputField from '../../components/inputField/InputField';

class OrderForm extends Component {
    render(){
        return(
            <div class="col-md-offset-3 col-md-4 front-form-wrapper front-wow front-fadeInRight" data-wow-duration="1.5s">
                      <form action="post" class="form-group">
                        <InputField/>
                        <input class="form-control" type="text" placeholder="Full Name"/>
                        <input class="form-control" type="password" placeholder="Password"/>
                        <input class="form-control" type="email" placeholder="Email"/>
                        <input class="front-btn-ghost-light" type="submit" value="Order Now"/>
                      </form>
                    </div>
        )
    }
}

export default OrderForm;