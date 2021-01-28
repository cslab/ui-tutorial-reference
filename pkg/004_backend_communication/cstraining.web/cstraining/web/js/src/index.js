import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import reducer from './reducers/reducers';
import MainComponent from './containers/MainComponent';
import TicketDetails from './components/TicketDetails';
import Widgets from './components/TicketWidgets';
import setupSagas from './sagas/ticket-sagas.js';
import setupStateColorSagas from './sagas/state-colors-sagas';
import StateColorReducer from './reducers/state-colors-reducer';
Registry.registerSaga(setupStateColorSagas);
Registry.registerReducer(prefixNS('stateColors'), StateColorReducer);
Registry.registerSaga(setupSagas);

Registry.registerComponent(prefixNS('MyTicketsWidget'), Widgets.MyTicketsWidget);
Registry.registerComponent(prefixNS('UnassignedTicketsWidget'), Widgets.UnassignedTicketsWidget);

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerReducer(prefixNS('reducer'), reducer);

Registry.registerComponent(prefixNS('TicketDetails'), TicketDetails);

export default {
    MainComponent,
    TicketDetails,
    Widgets,
};
