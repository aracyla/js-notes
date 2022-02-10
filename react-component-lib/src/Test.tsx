import Notification, { useNotification } from 'components/Notification/';

const Test: React.FC = () => {
    const { showNotification } = useNotification();

    const c = () => {
        showNotification({
            notificationContent: (
                <Notification>
                    teste
                </Notification>
            )
        });
    }
    const d = () => {
        showNotification({
            notificationContent: (
                <Notification color="danger">
                    teste
                </Notification>
            ),
            duration: 10000,
        });
    }

    return (
        <>
            <div onClick={() => c()}>
                Vrau
            </div>
            <div onClick={() => d()}>
                Longer Vrau
            </div>
        </>
   );
};

export default Test;
