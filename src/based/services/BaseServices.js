import RequestEcom from "../RequestEcom";

const BaseServices = {
  Get: async (url) => {
    try {
      const res = await RequestEcom.Get(url);
      if (res.success) return [null, res.data];
      return [res, null];
    } catch (err) {
      return [err, null];
    }
  },
  Post: async (url, params) => {
    try {
      const res = await RequestEcom.Post(url, params);
      if (res.success) return [null, res];
      return [res.message, null];
    } catch (err) {
      return [err, null];
    }
  },
  Delete: async (url) => {
    try {
      const res = await RequestEcom.Delete(url);
      if (res.success) return [null, res.data];
      return [res, null];
    } catch (err) {
      return [err, null];
    }
  },
};

export default BaseServices;
