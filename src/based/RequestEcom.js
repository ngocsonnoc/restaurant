import axios from "axios";
import Common from "./Common";

const homeUrl =
  process.env.NODE_ENV === "production"
    ? "https://beta.ranus.vn"
    : process.env.REACT_APP_BASE_URL;
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://beta-home-api.ranus.vn"
    : process.env.REACT_APP_BE_URL;
const cdnUrl =
  process.env.NODE_ENV === "production"
    ? "https://beta-cdn.ranus.vn"
    : "https://localhost:6001";

var token = Common.GetToken();

const instance = axios.create({ baseURL: apiUrl });
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

const CancelToken = axios.CancelToken;

let cancel;
var RequestEcom = {
  HOME_URL: homeUrl,
  API_URL: apiUrl,
  CdnURL: function () {
    return cdnUrl;
  },
  Get: function (url) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            Common.RemoveToken();
            window.location.href = "/login?redirect=" + window.location.href;
          } else if (error.response && error.response.status === 302) {
            window.location.href = "/confirm-email";
          } else if (error.response && error.response.status === 403) {
            window.location.href = "/access-denied";
          } else if (error.response) {
            reject(error.response.data);
          }
        });
    });
  },

  async GetAsync(url, data) {
    var result = await instance.get(url, data);
    return result;
  },

  Post: function (url, data) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, data, {
          cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            Common.RemoveToken();
            window.location.href = "/login?redirect=" + window.location.href;
          } else if (error.response && error.response.status === 302) {
            window.location.href = "/confirm-email";
          } else if (error.response && error.response.status === 403) {
            window.location.href = "/access-denied";
          } else if (error.response) {
            reject(error.response.data);
          }
        });
    });
  },

  async PostAsync(url, data) {
    var result = await instance.post(url, data);
    return result;
  },

  Put: function (url, data) {
    return new Promise((resolve, reject) => {
      instance
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            Common.RemoveToken();
            window.location.href = "/login?redirect=" + window.location.href;
          } else if (error.response && error.response.status === 403) {
            window.location.href = "/access-denied";
          } else if (error.response) {
            reject(error.response.data);
          }
        });
    });
  },

  async PutAsync(url, data) {
    var result = await instance.put(url, data);
    return result;
  },

  Delete: function (url) {
    return new Promise((resolve, reject) => {
      instance
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            Common.RemoveToken();
            window.location.href = "/login?redirect=" + window.location.href;
          } else if (error.response && error.response.status === 403) {
            window.location.href = "/access-denied";
          } else if (error.response) {
            reject(error.response.data);
          }
        });
    });
  },

  async DeleteAsync(url, data) {
    var result = await instance.delete(url, data);
    return result;
  },

  UploadImage: function (file, imageType = 0) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${cdnUrl}/api/images/upload-image/${imageType}`);
      xhr.setRequestHeader("client", "tfu_admin");
      if (token) xhr.setRequestHeader("Authorization", "Bearer " + token);
      const data = new FormData();
      data.append("file", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error =
          xhr.responseText && xhr.responseText.length > 0
            ? JSON.parse(xhr.responseText)
            : null;
        reject(error);
      });
    });
  },

  DeleteImage: function (fileName) {
    instance.defaults.headers["client"] = "tfu_admin";
    return new Promise((resolve, reject) => {
      instance
        .post(`${cdnUrl}/api/images/delete-image/${fileName}`, fileName)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  UploadSlide: function (file) {
    if (file) {
      let type = file.type;
      if (
        type &&
        (type ==
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
          type == "application/vnd.ms-powerpoint")
      ) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", `${cdnUrl}/api/media/upload-presentation`);
          const data = new FormData();
          data.append("file", file);
          xhr.send(data);
          xhr.addEventListener("load", () => {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          });
          xhr.addEventListener("error", () => {
            const error = JSON.parse(xhr.responseText);
            reject(error);
          });
        });
      } else {
        return new Promise((resolve, reject) => {});
      }
    }
  },

  ImportExcel: function (file, importUrl) {
    if (file) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", apiUrl + importUrl);
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        xhr.setRequestHeader("client", "tfu_admin");
        const data = new FormData();
        data.append("file", file);
        xhr.send(data);
        xhr.addEventListener("load", () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener("error", () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      });
    }
  },

  DownloadTemplate: function (fileName) {
    if (fileName) {
      window.location.href =
        `${cdnUrl}/api/images/download-template/` + fileName;
    }
  },

  ExportExcel: function (obj) {
    if (obj) {
    }
  },

  CancelRequest: function () {
    if (cancel) cancel();
  },
};
export default RequestEcom;
