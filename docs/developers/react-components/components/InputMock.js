import React from 'react';
import classNames from 'classnames';

const Input = props => {
    const {
        theme,
        error,
        state,
        className,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'input-field',
        'outline-none',
        'text-gray-900',
        'dark:text-gray-200',
        'py-2',
        `focus:border-${theme}-600`,
        `dark:focus:border-${theme}-500`,
        (state === 'error') ? 'border-red-500 text-red-500' : '',
        (state === 'saved') ? 'border-green-500 text-green-500' : '',
        (state === 'saving') ? 'border-orange-500' : '',
    )

    return (
        <>
            <input {...attributes} className={classes} />
            {
                (state === 'error' && error !== '')
                    ? <span className="text-sm text-red-500">{error}</span>
                    : null
            }
        </>
    );
}

export default Input;