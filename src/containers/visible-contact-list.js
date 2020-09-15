import {connect} from 'react-redux';
import { deleteContact } from '../actions';
import ContactList from '../components/contact-list'




const getvisibleContacts = (contacts, filter) => {
    if(filter.length === 0) {
        return contacts;
    };
    return contacts.filter((contact) => {
        return contact.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
};

const mapStateToProps = (state) => {
    console.log(state.todos.items);
    return {
        visibleContacts: getvisibleContacts(state.todos.items, state.todos.filter),
    }   
}   

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleted: (id) => dispatch(deleteContact(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);