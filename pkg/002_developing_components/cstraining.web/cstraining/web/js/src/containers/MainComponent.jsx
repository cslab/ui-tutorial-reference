/**
 * Created by cla on 07.04.2016.
 */

import React from 'react';
import {SinglePage, PageFrame} from 'cs-web-components-base';
import HelloWorld from '../components/HelloWorld';

export default class MainComponent extends React.Component {
    render() {
        return (<SinglePage frameComponent={PageFrame.ApplicationFrame}
                            pageContent={HelloWorld} />);
    }
}
