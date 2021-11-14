import React from 'react'


const CustomButton = ({type,children, ...otherProps}) => {
    let baseClass = "button ";
    const generateClass = (activity) =>{
        const btnActivity = activity.toLowerCase().trim();
        switch (btnActivity) {
            case 'edit':
                return baseClass.concat('is-success');
                break;
            case 'add':
                return baseClass.concat('is-success');
                break;
            case 'save':
                return baseClass.concat('is-info');
                break;
            case 'delete':
                return baseClass.concat('is-danger');
                break;
            case 'submit':
                return baseClass.concat('is-link');
                break;
            case 'cancel':
                return baseClass.concat('is-danger');
                break;
            default:
                 return baseClass
        }
    }
    return (
        <button type={type} {...otherProps} className={`${generateClass(children)}`}>{children}</button>


    )
}

export default CustomButton
