import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddForm from '../components/add-form';
import {addContact} from '../actions'


class AddFormContainer extends Component {
    render() {
       return <AddForm  addContact={this.props.addContact} />  
    }
}
 



const mapDispatchToProps = {
    addContact
}

export default connect(null, mapDispatchToProps)(AddFormContainer);