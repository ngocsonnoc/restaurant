import BaseServices from "./BaseServices";

const OrderServices = {
  getListOrder: async (paging) => {
    return await BaseServices.Post("/api/booking/home-get-list-order", paging);
  },
  getListOrderByTableIdAndDate: async (tableId, date) => {
    return await BaseServices.Post(
      "/api/booking/get-list-order-by-table-id-and-date",
      { tableId: tableId, date: date }
    );
  },
  PaymentOrder: async (orderId) => {
    return await BaseServices.Get(`/api/booking/payment/${orderId}`);
  },
};
export default OrderServices;
