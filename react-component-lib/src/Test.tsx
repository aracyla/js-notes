import Notification, { useNotification } from 'components/Notification/';

const Test: React.FC = () => {
    const { showNotification } = useNotification();

    const c = () => {
        showNotification({
            c: (
                <Notification>
                    teste
                </Notification>
            ),
            duration: 3000,
        });
    }

    return (
        <div onClick={() => c()}>
            Vrau
        </div>
   );
};

export default Test;
