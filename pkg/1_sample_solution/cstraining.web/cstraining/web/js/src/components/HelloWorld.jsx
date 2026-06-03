import React from 'react';
import {Button, ButtonToolbar} from 'cs-web-components-base';
import {ReactRedux} from 'cs-web-components-externals';
import {thunkActionCreator, asyncActionCreator} from '../actions/actions';

const {useDispatch} = ReactRedux;

export default function HelloWorld() {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello World!</h1>
            <ButtonToolbar>
                <Button onClick={() => dispatch(thunkActionCreator())}>Thunk</Button>
                <Button onClick={() => dispatch(asyncActionCreator())}>Async</Button>
            </ButtonToolbar>
        </div>
    );
}
