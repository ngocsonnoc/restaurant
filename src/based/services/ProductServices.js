import BaseServices from "./BaseServices";

const ProductServices = {
    GetProductByPaging: async (paging) => {
        return await BaseServices.Post("/api/product/get-all-products", paging);
      },
      GetAllTable: async (paging) => {
        return await BaseServices.Post("/api/table/get-list-tables", paging);
      },
      GetTableById: async (id) => {
        return await BaseServices.Get(`/api/table/get-table-by-id/${id}`);
      },
      CreateOrder:async (data) => {
        return await BaseServices.Post("/api/booking/create-update-order", data);
      }
};

export default ProductServices;
