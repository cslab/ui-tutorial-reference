import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import reducer from './reducers/reducers';
import MainComponent from './containers/MainComponent';
import TicketDetails from './components/TicketDetails';

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerReducer(prefixNS('reducer'), reducer);
Registry.registerComponent(prefixNS('TicketDetails'), TicketDetails);
export default {
    MainComponent,
    TicketDetails
};
