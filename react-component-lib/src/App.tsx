import 'theme/styles/main.scss';

import Icon from 'components/Icon';

const App: React.FC = () => {
    return (
        <div>
            <Icon name="delete" />
            <Icon name="delete" size="large" />
            <Icon name="delete" size="large" label="bray" />
        </div>
   );
};

export default App;
