import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const DEFAULTDAY= {
    ID: "0001-01-01T00:00:00+07:00",
}
const UserInfoInput = ({ title, name, value, isDatePicker, errMsg, require, parentClassName, setValue, isPassword, isTextArea, readOnly, classNameTitle, customTitle, isPhoneNumber, handleOnChange }) => {
    return (
        <div className={parentClassName ? `mb-4 user-info ${parentClassName}` : "mb-4 user-info"}>
            {customTitle ? customTitle : <label className={classNameTitle ? classNameTitle : ""}>{title}</label>}

            {isTextArea ? (
                <textarea id={name} required={require ? true : false} name={name} className={errMsg ? 'alert alert-warning long' : 'long'} value={value} onChange={(e) => setValue(e.target.value, name)} />
            ) : isPhoneNumber ? (
                <div className="user-phone-number">
                    <span className="phone_prefix">+84</span>
                    <input id={name} name={name} required={require ? true : false} disabled={readOnly} type={isPhoneNumber ? "number" : "text"} className={errMsg ? "tfu-control input-prefix alert alert-warning" : "tfu-control input-prefix"}
                        value={value} onChange={setValue ? (e) => setValue(e.target.value, name) : (e) => handleOnChange(e.target.value, name)} />
                </div>
            ) : isDatePicker ? (
                <DatePicker
                selected={(value === DEFAULTDAY.ID ? Date.parse('01 Dec 1990 00:00:00 GMT') : Date.parse(value))}
                    dateFormat="dd/MM/yyyy"
                    onSelect={(e) => setValue(e)} //when day is clicked
                    onChange={(e) => setValue(e)} //only when value has changed
                    className={errMsg ? "tfu-control w-100 alert alert-warning" : "tfu-control w-100"}
                />
            ) : (
                <input id={name} name={name} required={require ? true : false} disabled={readOnly} type={isPassword ? "password" : "text"} className={errMsg ? "tfu-control w-100 alert alert-warning" : "tfu-control w-100"} value={value} onChange={setValue ? (e) => setValue(e.target.value, name) : (e) => handleOnChange(e.target.value, name)} />
            )}
            {errMsg ? <span className="text-danger">{errMsg}</span> : ''}
        </div>
    );
};

export default UserInfoInput;
