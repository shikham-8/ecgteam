import BPMHistoryPage from './components/BPMHistoryPage.js'
import HealthInfoPage from './components/HealthInfoPage.js'
import ECGPage from './components/ECGPage.js';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  ECG: ECGPage,
  History: BPMHistoryPage,
  Health: HealthInfoPage,
});

export default createAppContainer(TabNavigator);