import React, { useEffect, useState } from "react";
import { NOTIFY } from "../../based/Constants";
import Toast from "./Toast";

const Notify = (props) => {
  const [list, setList] = useState([]);
  let toastProperties = null;
  const showToast = (type, message) => {
    switch (type) {
      case NOTIFY.SUCCESS:
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: message,
          backgroundColor: "#5cb85c",
        };
        break;
      case NOTIFY.ERROR:
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: message,
          backgroundColor: "#d9534f",
        };
        break;
      case NOTIFY.INFO:
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: message,
          backgroundColor: "#5bc0de",
        };
        break;
      case NOTIFY.WARNING:
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: message,
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  useEffect(() => {
    showToast(props.type, props.message);
    return () => {
      setList([]);
    };
  }, [props.type, props.message]);
  return <Toast toastlist={list} position="buttom-right" setList={setList} />;
};

export default Notify;
