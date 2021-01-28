import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {connect, PropTypes} from 'cs-web-components-externals';
import {thunkActionCreator, asyncActionCreator} from '../actions/actions';

class HelloWorld extends React.Component {
    render() {
        const {thunkAction, asyncAction} = this.props;

        return (
            <div>
                <h1>Hello World!</h1>
                <ButtonToolbar>
                    <Button onClick={thunkAction}>Thunk</Button>
                    <Button onClick={asyncAction}>Async</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

HelloWorld.propTypes = {
    thunkAction: PropTypes.func,
    asyncAction: PropTypes.func
};

function mapStateToProps(state /*, ownProps */) {
    return {
        something: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        thunkAction: () => { dispatch(thunkActionCreator()) },
        asyncAction: () => { dispatch(asyncActionCreator()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
