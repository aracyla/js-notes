import { createContext, useState, useContext, useEffect } from 'react';

import { ThemeColors } from 'theme';

//Provider and context
const NotificationCtx = createContext<any>({});
type NotificationData = {
    [id: string]: JSX.Element | string;
}

const NotificationRender: React.FC<{notifications: NotificationData | null}> = ({ notifications }) => {
    return (
        <>
            {Object.values(notifications || {}).map((n, index) => {
                return (
                    <div key={index}>
                        {n}
                    </div>
                )
            })}
        </>
    );
};

export const NotificationProvider: React.FC = ({ children }) => {
    const [activeNotifications, setActiveNotifications] = useState<NotificationData | null>(null);
    return (
        <NotificationCtx.Provider value={{activeNotifications, setActiveNotifications}}>
            <NotificationRender notifications={activeNotifications} />
            {children}
        </NotificationCtx.Provider>
    );
};

// hook
type NotificationConfig = {
    notificationContent: JSX.Element | string;
    duration?: number;
    color?: ThemeColors;
    isLight?: boolean;
}

interface IUseNotification {
    showNotification: (config: NotificationConfig) => void;
}

export const useNotification = (): IUseNotification => {
    const { activeNotifications, setActiveNotifications } = useContext(NotificationCtx);
    const [idToRemove, setIdToRemove] = useState('');

    useEffect(() => {
        if(idToRemove) {
            const _activeNotifications = Object.entries(activeNotifications).reduce((acc, cur) => {
                const [key, value] = cur;
                if(idToRemove === key)
                    return {
                        ...acc,
                    }
                return {
                    ...acc,
                    [key]: value,
                }
            }, {});
            setActiveNotifications(_activeNotifications);
        }
    }, [idToRemove]);

    const _setRemoveNotificationTimer = (id: string, duration: number) => {
        setTimeout(() => {
            setIdToRemove(id);
        }, duration);
    };

    const showNotification = ({
            notificationContent = '',
            duration = 3000,
            color = 'success',
            isLight = false,
        }: NotificationConfig) => {
        const notificationId = (Date.now()).toString();
        setActiveNotifications({
            ...(activeNotifications),
            [notificationId]: notificationContent,
        });
        _setRemoveNotificationTimer(notificationId, duration);
    };

    return { showNotification };
};
