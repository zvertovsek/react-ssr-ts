import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { UserActions } from '../actions';
import { RootStateModel } from '../models/state';
import { omit } from '../../utils';


export namespace Users {
    export interface IProps extends RouteComponentProps<void> {
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
class Users extends React.Component<Users.IProps> {
    
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
                <div>Best Home Component</div>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}



export default Users;