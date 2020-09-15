import React, {Component} from 'react';
import '../index.css';
import {CSSTransition } from 'react-transition-group';

import AddFormContainer from '../containers/add-form-container';
import Filter from '../containers/filter'
import VisibleContactList from '../containers/visible-contact-list';


export default class App extends Component {
    
    state = {
        isAnimated: false,
    };

    componentDidMount() {
        this.setState(state => ({
            isAnimated: !state.isAnimated 
        }))
    };
    
    render() {
        const { isAnimated} = this.state;

        return(
            <div className="phonebook">
                <CSSTransition in={isAnimated} timeout={1000} classNames="appear" >
                    <h2 className="title-animated">Phonebook</h2>
                </CSSTransition>    
                <AddFormContainer />  

                <h2 className="title">Contacts</h2>
                <Filter />
                <VisibleContactList/>
            </div>
        );
    };
};