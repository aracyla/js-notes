import Notification, { useNotification } from 'components/Notification/';

const Test: React.FC = () => {
    const { showNotification } = useNotification();

    const c = () => {
        showNotification({
            notificationContent: `${Date.now()} + vrau D`,
            color: 'warning',
        });
    }
    const d = () => {
        showNotification({
            notificationContent: `${Date.now()} + vrau D`,
            color: 'danger',
            duration: 6000,
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
