import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router';
import { RouteConfigComponentProps } from 'react-router-config';
import { UserActions } from '../actions';
import { RootStateModel } from '../models/state';
import { omit } from '../../utils';
import { usersInitializer } from '../sagas/userSaga';


export namespace Users {
    export interface IProps extends RouteConfigComponentProps<void> {
        users: RootStateModel.UsersState;
        actions: UserActions;
    }
}

@connect(
    (state: RootStateModel): Pick<Users.IProps, 'users'> => {
        return {
            users: state.users
        }
    },
    (dispatch: Dispatch): Pick<Users.IProps, 'actions'> => ({
        actions: bindActionCreators(omit(UserActions, 'Type'), dispatch)
    })
)
class UsersPage extends React.Component<Users.IProps> {
    
    componentDidMount(){
        this.props.actions.fetchUsers()
    }

    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }
    
    public render(): JSX.Element {
        return (
            <div>
                <div>Users Component</div>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}


export default {
    preloaders: [ 
        { fn: usersInitializer, attrs: {} } 
    ],
    component: UsersPage
};