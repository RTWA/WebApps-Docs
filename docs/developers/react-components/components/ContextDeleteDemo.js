import React from 'react';
import { WebAppsDocs, WebAppsDocsContext } from './WebAppsDocs';
import WebAppsComponent from './WebAppsComponent';
import { Button, ConfirmDeleteModal } from 'webapps-react';
import { confirmAlert } from 'react-confirm-alert';

const ContextDeleteDemo = () => {

    const contextDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ConfirmDeleteModal
                        onConfirm={() => { alert('You chose yes'); onClose(); }}
                        onCancel={() => {
                            alert('You chose no'); onClose();
                        }} />
                );
            }
        });
    }

    return (
        <WebAppsDocs>
            <WebAppsComponent>
                <WebAppsDocsContext.Consumer>
                    {
                        ctx => (
                            <>
                                <div className="w-full flex flex-row justify-center">
                                    <Button color={ctx.UI.theme} onClick={contextDelete}>Click me for a preview</Button>
                                </div>
                            </>
                        )
                    }
                </WebAppsDocsContext.Consumer>
            </WebAppsComponent>
        </WebAppsDocs>
    )
}

export default ContextDeleteDemo;
