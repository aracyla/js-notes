import { createContext, useState, useContext, useEffect } from 'react';

const NotificationCtx = createContext<any>({});

// const NotificationRender = ({ notifications, onNotificationChange }) => {
//     useEffect(() => {
//         setTimeout(() => {
    
//         })
//     }, [notifications]);
// }
//

export const NotificationProvider: React.FC = ({ children }) => {
    const [activeNotifications, setActiveNotifications] = useState<React.FC<Notification>[]>([]);
    useEffect(() => {
        console.log(activeNotifications);
    }, [activeNotifications]);
    return (
        <NotificationCtx.Provider value={{activeNotifications, setActiveNotifications}}>
            {children}
        </NotificationCtx.Provider>
    );
};

// hook

type NotificationControl = {
    c: JSX.Element | null,
    duration: number,
}

interface IUseNotification {
    showNotification: (config: NotificationControl) => void;
}

export const useNotification = (): IUseNotification => {
    const { activeNotifications, setActiveNotifications } = useContext(NotificationCtx);
    console.log(activeNotifications, setActiveNotifications);

    const showNotification = (config: NotificationControl) => {
        const {c, duration} = config;
        if(c) {
            setActiveNotifications([...activeNotifications, c]);
            setTimeout(() => {
                setActiveNotifications([
                    ...(activeNotifications.filter((n: JSX.Element) => n !== c))
                ]);
            }, duration);
        }
    };
    return { showNotification };
}
