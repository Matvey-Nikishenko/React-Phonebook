import React, {Component} from 'react';
import {filterContact} from '../actions';
import {connect} from 'react-redux';

class Filter extends Component {
    

    onChangeSearch = (e) => {
        this.props.filterContact(e.target.value);
    };

    render() {
        return(
            <div className="find-component">
                <span className="find-text">Find contacts by name</span>
                    <input 
                        value={this.props.filter}
                        className="search-input"
                        placeholder="search contact"
                        onChange={this.onChangeSearch}
                        />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filter: state.todos.filter
    }
};

 const mapDispatchToProps = {
    filterContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
