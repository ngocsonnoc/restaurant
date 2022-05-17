import BaseServices from "./BaseServices";

const UserServices = {
  SendContact: async (model) => {
    return await BaseServices.Post("/api/user/send-contact", model);
  },
};
export default UserServices;
