import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Header from './Header';
import TableRow from './TableRow';
import Modal from "./Modal";

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleModal: false,
            deleteItemId: '',
            enteredPassword: ''
        }
    }

    onChange = ev => this.setState({enteredPassword: ev.target.value});

    onCancel = () => {
        this.setState(prevState => ({
            toggleModal: !prevState.toggleModal
        }));
    };

    onConfirm = ev => {
        ev.preventDefault();
        console.log('confirm');
        if (this.state.enteredPassword === this.props.user.passwordValue) {
            this.props.deleteItem(this.state.deleteItemId)
        } else {
            alert('Incorrect Password');
        }
    };

    onDelete = id => {
        this.onCancel();
        this.setState({deleteItemId: id});
    };


    onLogout = ev => {
        ev.preventDefault();
        this.props.logOut();
        return <Redirect to="/login"/>
    };

    render() {
        return (
            <>
                <Header userName={this.props.user.loginValue} onLogout={this.onLogout}/>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>created At</th>
                        <th>actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(el =>
                        <TableRow key={el.id}
                                  id={el.id}
                                  title={el.name}
                                  description={el.body}
                                  createdAt={el.email}
                                  onDelete={this.onDelete}
                        />)}
                    </tbody>
                </table>

                {this.state.toggleModal ?
                    <Modal onCancel={this.onCancel}
                           onChange={this.onChange}
                           onConfirm={this.onConfirm}/>
                    : null}
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user.userInfo,
        data: state.tableData.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            dispatch({
                type: 'GET_DATA',
            })
        },
        logOut: () => {
            dispatch({
                type: 'LOGOUT'
            })
        },
        deleteItem: (id) => {
            dispatch({
                type: 'DELETE_ITEM',
                payload: id
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
