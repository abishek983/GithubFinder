import React from 'react'

function Alert({alert}) {
    return (
        alert!==null && (<div className="alert alert-danger" role="alert"> {alert.msg} </div>)
    )
}

export default Alert;