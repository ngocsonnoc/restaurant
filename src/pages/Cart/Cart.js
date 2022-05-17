import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Common from "../../based/Common";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import Footer from "../../components/common/Footer";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import styled from "styled-components";
import { cartAddItem, cartRemoveItem } from "../../redux/cart/cartActions";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { removeTable, selectTable } from "../../redux/table/tableActions";
import { tableSelected } from "../../redux/table/tableSelector";
import TableModel from "../../models/TableModel";
import ProductServices from "../../based/services/ProductServices";
import PaymentServices from "../../based/services/PaymentServices";
import Loading from "../../components/common/Loading/Loading";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({
  cartCount,
  cartList,
  cartTotal,
  cartAddItem,
  cartRemoveItem,
  tableSelected,
  addTable,
  removeTable,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [table, setTable] = useState(new TableModel());
  var dt = new Date();
  var minDate = new Date();
  var maxDate = new Date(dt.setDate(dt.getDate() + 3));
  useEffect(() => {
    if (tableSelected.tableId !== "") getTable(tableSelected.tableId);
  }, [tableSelected.tableId]);

  const handlePayment = async (method) => {
    setIsLoading(true);
    let listOrder = [];
    cartList.map((item) => {
      return listOrder.push({
        productId: item._id,
        productDisplayName: item.displayName,
        quantity: item.quantity,
        unit: item?.unit || "kg",
        price: item?.price || 0,
      });
    });
    let obj = {
      tableId: tableSelected.tableId,
      tableName: table.name,
      bookingDate: tableSelected.bookingDate,
      bookingTime: tableSelected.bookingTime,
      customerName: tableSelected.customerName,
      phoneNumber: tableSelected.phoneNumber,
      price: cartTotal,
      seat: tableSelected.seat,
      listOrder: [...listOrder],
      isPayment: false,
    };
    let [err, data] = await ProductServices.CreateOrder(obj);
    if (!err && data && data.success) {
      debugger;
      setIsLoading(false);
      toast.success("Tạo đơn thành công, chuẩn bị mã thanh toán!");
      var info = {
        orderId: data?.result?.orderId,
        amount: cartTotal,
        payInfo:
          tableSelected.customerName +
          "-" +
          tableSelected.phoneNumber +
          "-" +
          table.name,
      };
      if (cartCount > 0 && tableSelected.tableId !== "") {
        switch (method) {
          case "momo":
            setIsLoading(true);
            let [err, data] = await PaymentServices.MomoPayment({ ...info });
            if (!err && data) {
              setIsLoading(false);
              if (data.paymentUrl && data.paymentUrl !== "") {
                window.location.href = data.paymentUrl;
              } else {
                toast.warning("Có lỗi xảy ra khi tạo mã thanh toán!");
              }
            } else {
              setIsLoading(false);
              toast.error(
                !!err && typeof err === "string" ? err : "Có lỗi xảy ra"
              );
            }
            break;

          default:
            break;
        }
      }
    } else {
      console.log(typeof err?.message);
      toast.warning(
        err?.message && typeof err?.message === "string"
          ? err.message
          : "Có lỗi !"
      );
      setIsLoading(false);
    }
  };
  const getTable = async (id) => {
    setIsLoading(true);
    let [err, data] = await ProductServices.GetTableById(id);

    if (!err && data) {
      setIsLoading(false);
      setTable(data.result);
    } else {
      setIsLoading(false);
      setTable(new TableModel());
    }
  };

  const handleSelectedTimeRange = (times) => {
    if (times && times.length > 1) {
      times.sort(function (a, b) {
        return a.value - b.value;
      });
      return {
        minValue: times[0].minLabel,
        maxValue: times[times.length - 1].maxLabel,
      };
    } else {
      if (times && times.length === 1)
        return {
          minValue: times[0].minLabel,
          maxValue: times[0].maxLabel,
        };
      else return { minValue: "", maxValue: "" };
    }
  };
  return (
    <Wrapper>
      {isLoading ? <Loading /> : ""}
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Thực đơn của bạn</h1>
          <div className="orders-menu row">
            <div className="col-md-6">
              {cartList && cartList.length > 0
                ? cartList.map((item, idx) => (
                    <div
                      className="cart-order-item d-flex align-items-center justify-content-between p-3"
                      key={idx}
                    >
                      <div className="item-avatar">
                        <img src={item.productAvatar} alt={item.displayName} />
                      </div>
                      <div className="cart-item-center d-flex flex-column">
                        <span className="item-name">{item.displayName}</span>
                        <span className="text-center">
                          {Common.formatCurrency(item.quantity * item.price)}
                        </span>
                      </div>

                      <div className="cart-qty text-center d-flex align-items-center">
                        <span
                          className="qtybutton"
                          id="decrease"
                          onClick={(e) => cartRemoveItem(item)}
                        >
                          -
                        </span>
                        <input
                          type="text"
                          value={item.quantity}
                          className="form-control quantity"
                          readOnly
                        />
                        <span
                          className="qtybutton"
                          id="increase"
                          onClick={() => cartAddItem(item)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="col-md-6 col-lg-6 " style={{ paddingLeft: 20 }}>
              <div className="time-booking d-flex flex-column ">
                <div className="image-preview" style={{ height: 140 }}>
                  {table._id !== "" ? (
                    <img src={table.tableAvatar} alt={table.name} />
                  ) : (
                    ""
                  )}
                </div>

                {table._id !== "" ? (
                  <div className="table-name">
                    <span>{table.name}</span> - <span>{table.floor}</span> -
                    <span>Số ghế tối đa:{table.maxSeats}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="d-flex">
                  {" "}
                  <span className="label-text " style={{ flexBasis: "30%" }}>
                    {" "}
                    Ngày đặt:
                  </span>
                  <div style={{ maxWidth: "200px", marginLeft: 10 }}>
                    {Common.formatDate(new Date(tableSelected.bookingDate))}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="label-text " style={{ flexBasis: "30%" }}>
                    {" "}
                    Thời gian:
                  </span>{" "}
                  <div
                    className="time-selected d-flex"
                    style={{ marginLeft: 10 }}
                  >
                    {handleSelectedTimeRange(tableSelected.bookingTime)
                      .minValue ? (
                      <span>
                        {
                          handleSelectedTimeRange(tableSelected.bookingTime)
                            .minValue
                        }{" "}
                        đến{" "}
                        {
                          handleSelectedTimeRange(tableSelected.bookingTime)
                            .maxValue
                        }
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="booking-info d-flex mt-2">
                  <span className="label-text " style={{ flexBasis: "30%" }}>
                    Tên người nhận bàn:
                  </span>
                  <input
                    type="text"
                    value={tableSelected.customerName}
                    onChange={(e) => {}}
                    className="input-border-bottom ml-4 "
                    style={{ flexBasis: "70%" }}
                  />
                </div>
                <div className="booking-info d-flex mt-2">
                  <span className="label-text " style={{ flexBasis: "30%" }}>
                    Số điện thoại:
                  </span>
                  <input
                    type="text"
                    className="input-border-bottom ml-4 "
                    style={{ flexBasis: "70%" }}
                    value={tableSelected.phoneNumber}
                    onChange={(e) => {}}
                  />
                </div>
                <div className="booking-info d-flex mt-2">
                  <span className="label-text " style={{ flexBasis: "30%" }}>
                    Số người:
                  </span>
                  <input
                    type="number"
                    className="input-border-bottom ml-4 "
                    style={{ flexBasis: "70%" }}
                    value={tableSelected.seat}
                    onChange={(e) => {}}
                  />
                </div>
              </div>
            </div>
            {/* <Menu list={cartList} isOrder={true} /> */}
          </div>
          <div className="d-flex justify-content-end order-footer">
            <div>
              <h3 className="orders-total">
                Tổng cộng: {Common.formatCurrency(cartTotal)}{" "}
              </h3>
              <span
                className="special-button"
                onClick={() => handlePayment("momo")}
              >
                Xác nhận thanh toán
              </span>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
  tableSelected: tableSelected,
});
const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  addTable: (table) => {
    dispatch(selectTable(table));
  },
  removeTable: () => {
    dispatch(removeTable());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;
  margin-top: 130px;
  .cart-header {
    padding-top: 0.5rem;
  }

  .orders {
    margin: 2rem 0 0 0;
    min-height: calc(100vh - 15rem);
  }

  .orders-heading,
  .orders-total {
    width: 100%;
    max-width: 600px;
  }
  .orders-heading {
    margin-bottom: 5.5rem;
    border-bottom: 2px solid #000;
  }
  .order-footer {
    margin-top: 20px;
    div {
      border-top: 2px solid #000;
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  .orders-total {
    text-align: right;
    margin-left: auto;
    margin-top: 3rem;
  }
  .special-button {
    width: 190px;
    cursor: pointer;
  }
  .qtybutton {
    cursor: pointer;
    font-size: 15px;
  }
  .cart-order-item {
    .item-avatar {
      width: 140px;
      img {
        width: 100%;
      }
    }
    .item-name {
      font-weight: bold;
      font-size: 1.2rem;
      width: 200px;
      margin-left: 20px;
    }
    .cart-qty {
      width: 80px;
    }
  }
  .quantity {
    height: 26px;
    border-radius: 20px;
    margin-left: 5px;
    pointer-events: none;
    text-align: center;
    margin-right: 5px;
  }
  .title {
  }
  .image-preview {
    width: 200px;
    max-width: 90%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .table-info {
  }
  .table-name {
    font-size: 1.3rem;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
  }
`;
