import React, {Component} from 'react';




 class AddForm extends Component {

    state = {
        name: '',
        number: ''
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        // const {name, number} = this.state;
        // const nameExists = this.props.visibleContacts.find(contact => contact.name === name);
        // if(nameExists) {
        //     alert( `${name} is already in contact`);
        // } else {this.props.addContact(name, number);}
        this.props.addContact(this.state.name, this.state.number)
        
        
    };

    handleInputChange = ({target}) => {
        const {name ,value} = target;
        this.setState({[name]:value})
    };

    render() {
        
        return(
            <form className="form" onSubmit={this.handleSubmitForm}>
                <label >Name
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        placeholder="Add name please"
                        onChange={this.handleInputChange} />
                </label>
            
                <label >Number
                    <input
                        type="text" 
                        value={this.state.number}
                        name="number"
                        placeholder="Add number please"
                        onChange={this.handleInputChange} />
                </label>        

            <button type="submit" className="btn">Add contact</button>
        </form> 
        );
    };

};

export default AddForm;