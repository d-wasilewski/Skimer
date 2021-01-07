const { user } = require("firebase-functions/lib/providers/auth");

const isEmpty = (string) => {
    return (string.trim() === '')
}

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false
}

exports.validateLoginData = (data) => {
    let errors = {}

    if(isEmpty(data.email)) errors.email = "To pole nie może być puste"
    if(isEmpty(data.password)) errors.password = "To pole nie może być puste"

    return {
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateModalData = (data) => {
    let errors = {}

    if(isEmpty(data.description)) errors.email = "To pole nie może być puste"
    if(new Date(data.deadline) == undefined) errors.deadline =  "Niepoprawna data"
    if(new Date() > new Date(data.deadline)) errors.deadline = "Niepoprawa data"

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}