import React, { useEffect, useState } from 'react';
import { Button, ToastProvider, useToasts } from 'webapps-react';

export const Toasts = props => {
    const [dark, setDark] = useState('light');

    useEffect(() => {
        setDark(document.documentElement.dataset.theme);
    }, []);

    return (
        <ToastProvider containerClasses={dark} autoDismiss="true" autoDismissTimeout="3000">
            <ToastDemo UI={props.UI} />
        </ToastProvider>
    )
}

const ToastDemo = props => {
    const { UI } = props;
    const { addToast, updateToast } = useToasts();

    const infoToast = () => addToast('Info Notification', 'This is the body content', { appearance: 'info' });
    const successToast = () => addToast('Success Notification', 'This is the body content', { appearance: 'success' });
    const warningToast = () => addToast('Warning Notification', 'This is the body content', { appearance: 'warning' });
    const errorToast = () => addToast('Error Notification', 'This is the body content', { appearance: 'error' });
    const dangerToast = () => addToast('Danger Notification', 'This is the body content', { appearance: 'danger' });
    const dangerToast2 = () => addToast('Danger Notification', '', { appearance: 'danger' });
    const plainToast = () => addToast('Plain Notification', 'This shouldn\'t have an icon', { appearance: 'plain' });
    const miscToast = () => addToast(
        'Some Action Was Taken',
        '',
        {
            appearance: 'misc',
            actionLabel: 'Was it?',
            action: () => { alert("No it wasn't!") },
            color: UI.theme
        }
    );
    const actionToast = () => addToast(
        'Another Action Was Taken',
        'This one has a secondary action!',
        {
            appearance: 'misc',
            actionLabel: 'Was it?',
            action: () => { alert("No it wasn't!") },
            secondaryActionLabel: 'Dismiss',
            secondaryAction: 'dismiss',
            color: UI.theme
        }
    );
    const updatingToast = () => {
        let toast = addToast('Updating Toast', 'This toast will change in 3 seconds', { appearance: 'plain', autoDismiss: false });

        setTimeout(function () {
            updateToast(toast, { appearance: 'danger', title: 'This toast updated!', content: 'This is now a danger toast! It will dismiss in 3 more seconds.', autoDismiss: true });
        }, 3000);
    }
    const allToasts = () => {
        infoToast();
        successToast();
        warningToast();
        errorToast();
        dangerToast();
        plainToast();
        dangerToast2();
        miscToast();
        actionToast();
        updatingToast();
    }

    return (
        <>
            <div className="w-full flex flex-row justify-center">
                <Button color={UI.theme} className="mx-auto mb-8" onClick={infoToast}>Info Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={successToast}>Success Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={warningToast}>Warning Toast</Button>
            </div>
            <div className="w-full flex flex-row justify-center">
                <Button color={UI.theme} className="mx-auto mb-8" onClick={errorToast}>Error Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={dangerToast}>Danger Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={plainToast}>Plain Toast</Button>
            </div>
            <div className="w-full flex flex-row justify-center">
                <Button color={UI.theme} className="mx-auto mb-8" onClick={dangerToast2}>Single Line Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={miscToast}>Single-Action Toast</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={actionToast}>Multi-Action Toast</Button>
            </div>
            <div className="w-full flex flex-row justify-center">
                <Button color={UI.theme} className="mx-auto mb-8" onClick={updatingToast}>An Updating Toast!</Button>
                <Button color={UI.theme} className="mx-auto mb-8" onClick={allToasts}>All The Toasts!</Button>
            </div>
        </>
    );
}