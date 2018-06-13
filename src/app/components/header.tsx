import * as React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Link } from 'react-router-dom';

import { RootStateModel } from '../models/state';

export namespace Header {
    export interface IProps {
        auth?: any
    }
}

@connect(
    (state: RootStateModel): Pick<Header.IProps, 'auth'> => {
        return { auth: state.auth }
    }
)
class HeaderComponent extends React.Component<Header.IProps> {
    
    public render(): JSX.Element {
        console.log(this.props);
        return (
            <div>
                <Link to="/">Logo</Link>
            </div>
        );
    }
}

export default HeaderComponent;