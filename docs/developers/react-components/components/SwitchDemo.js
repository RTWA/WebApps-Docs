import React, { useState } from 'react';
import { WebAppsDocs, WebAppsDocsContext } from './WebAppsDocs';
import WebAppsComponent from './WebAppsComponent';
import { Switch } from 'webapps-react';

const SwitchDemo = () => {
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const onChange = e => {
        setState('saving');
        setError('');
        if (Math.random() < 0.5) {
            setTimeout(() => {
                setState('error');
                setError('Failed to save check sate');
            }, 1000);
        } else {
            setTimeout(() => {
                setState('saved');
                setError('');
            }, 2000);

            setTimeout(() => {
                setState('');
            }, 4000);
        }
    }

    return (
        <WebAppsDocs>
            <WebAppsComponent>
                <WebAppsDocsContext.Consumer>
                    {
                        ctx => (
                            <>
                                <div className="w-full px-12">
                                    <Switch 
                                        state={state}
                                        error={error}
                                        onChange={onChange}
                                        theme={ctx.UI.theme} />
                                </div>
                            </>
                        )
                    }
                </WebAppsDocsContext.Consumer>
            </WebAppsComponent>
        </WebAppsDocs>
    )
}

export default SwitchDemo;
