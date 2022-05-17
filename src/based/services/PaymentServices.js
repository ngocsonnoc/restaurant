import BaseServices from "./BaseServices";

const PaymentServices = {
    MomoPayment: async (data) => {
        return await BaseServices.Post("/api/payment/momo-payment", data);
      },
      
};

export default PaymentServices;
