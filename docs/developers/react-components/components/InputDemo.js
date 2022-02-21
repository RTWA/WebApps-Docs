import React, { useState } from 'react';
import { WebAppsDocs, WebAppsDocsContext } from './WebAppsDocs';
import WebAppsComponent from './WebAppsComponent';
import Input from './InputMock';

const InputDemo = () => {
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const onBlur = e => {        
        setState('saving');
        setError('');
        if (e.target.value === "") {
            setTimeout(() => {
                setState('error');
                setError('This field is required');
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
                                    <Input type="text"
                                        state={state}
                                        error={error}
                                        placeholder="Enter text here"
                                        onBlur={onBlur}
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

export default InputDemo;
