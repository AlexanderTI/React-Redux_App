import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import  Header  from './Header';
import TableRow from './TableRow';

class Table extends React.Component {
    constructor() {
        super()
    }

    onLogout = (ev) => {
        ev.preventDefault();
        this.props.logOut();        
        return <Redirect to="/login" /> 
    }

    render() {
        
        return (
            <>
            <Header userName={this.props.user.loginValue} onLogout={this.onLogout} />
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
                />)}
                </tbody>
            </table>
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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);