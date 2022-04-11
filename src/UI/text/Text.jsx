import React from 'react';
// Styles
import classes from './Text.module.css';

/**
 * Text component
 * @param {number} children - Text 
 * @param {number} name - HTMLHeadingElement (h1, h2...)
 * @returns {JSX.Element}
 */
function Text({children,  ...props}) {

    function renderText (nameClass) {
        switch (nameClass) {
            case "h1": 
                return (
                    <p {...props} className={classes.h1}>
                        {children}
                    </p>
                )
            case "h2":
                return (
                    <p {...props} className={classes.h2}>
                        {children}
                    </p>
                )
            case "h3":
                return (
                    <p {...props} className={classes.h3}>
                        {children}
                    </p>
                )
            case "h4":
                return (
                    <p {...props} className={classes.h4}>
                        {children}
                    </p>
                )
            case "h5":
                return (
                    <p {...props} className={classes.h5}>
                        {children}
                    </p>
                )
            case "h6":
                return (
                    <p {...props} className={classes.h6}>
                        {children}
                    </p>
                )
            default:
                console.warn("Uncorrected nameClass of <Text />");
                console.log("Uncorrect nameClass of <Text />")
                break;
        }
    }

    return (
        renderText(props.name)
    );
}

export default Text;