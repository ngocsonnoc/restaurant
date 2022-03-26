import React, { useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { NOTIFY } from "./Constants";

const Notify = (props) => {
    useEffect(() => {
        createNotification(props.type, props.title, props.message);
      }, [props.type, props.title, props.message]);
  const createNotification = (type, title, message) => {
    return () => {
      switch (type) {
        case NOTIFY.INFO:
          NotificationManager.info(message, title, 2000);
          break;
        case NOTIFY.SUCCESS:
          NotificationManager.success(message, title);
          break;
        case NOTIFY.WARNING:
          NotificationManager.warning(message, title);
          break;
        case NOTIFY.ERROR:
          NotificationManager.error(message, title, 2000);
          break;
        default:
          NotificationManager.success(message, title, 2000);
          break;
      }
    };
  };
 
  return <NotificationContainer />;
};

export default Notify;
