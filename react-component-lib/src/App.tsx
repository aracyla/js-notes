import 'theme/styles/main.scss';
import { NotificationProvider } from 'components/Notification';

import Test from './Test';

const App: React.FC = () => {
    return (
        <NotificationProvider>
            <Test />
        </NotificationProvider>
   );
};

export default App;
