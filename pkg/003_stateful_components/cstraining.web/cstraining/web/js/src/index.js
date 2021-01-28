import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import reducer from './reducers/reducers';
import MainComponent from './containers/MainComponent';
import TicketDetails from './components/TicketDetails';
import Widgets from './components/TicketWidgets';
import setupSagas from './sagas/ticket-sagas.js';

Registry.registerComponent(prefixNS('MyTicketsWidget'), Widgets.MyTicketsWidget);
Registry.registerComponent(prefixNS('UnassignedTicketsWidget'), Widgets.UnassignedTicketsWidget);

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerReducer(prefixNS('reducer'), reducer);

Registry.registerComponent(prefixNS('TicketDetails'), TicketDetails);

Registry.registerSaga(setupSagas);

export default {
    MainComponent,
    TicketDetails,
    Widgets,
};
