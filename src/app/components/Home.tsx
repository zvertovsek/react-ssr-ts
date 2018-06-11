import * as React from 'react';

class Home extends React.Component {
    buttonClickHandler = (e: any): any => {
        e.preventDefault();
        console.log("clicked");
    }
    
    public render(): JSX.Element {
        return (
            <div>
                <div>Best Home Component</div>
                <button onClick={this.buttonClickHandler}>Click me!</button>
            </div>
        );
    }
}


export default Home;