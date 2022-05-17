import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import TableItem from "./TableItem";
import Common from "../../../../based/Common";
import { useEffect } from "react";
import ProductServices from "../../../../based/services/ProductServices";
import { ActiveTimes, INIT_PAGING } from "../../../../based/Constants";
import TableModel from "../../../../models/TableModel";
import { removeTable, selectTable } from "../../../../redux/table/tableActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../../../components/common/Loading/Loading";
import { ScrollMenuOptions } from "../Banner";

const BookTable = forwardRef(
  ({ tableSelected, addTable, removeTable, handleScrollMenu }, ref) => {
    const [isSelectTime, setIsSelectTime] = useState(false);
    const [paging, setPaging] = useState({ ...INIT_PAGING, pageSize: 20 });
    const [listDatas, setListDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [table, setTable] = useState(new TableModel());
    const [bookingInfo, setBookingInfo] = useState({
      tableId: "",
      bookingTime: [],
      bookingDate: "",
      seat: 2,
      phoneNumber: "",
      customerName: "",
    });
    const [activeTimeRange, setActiveTimeRange] = useState([...ActiveTimes]);

    var dt = new Date();
    var minDate = new Date();
    var maxDate = new Date(dt.setDate(dt.getDate() + 3));

    useEffect(() => {
      getDatas(paging);
    }, []);
    useEffect(() => {
      handleTableTime(table.listBooking, bookingInfo.bookingDate);
    }, [table._id, bookingInfo]);
    useEffect(() => {
      setBookingInfo({ ...bookingInfo, bookingTime: [] });
    }, [bookingInfo.tableId]);
    useEffect(() => {
      if (tableSelected?.tableId !== "" && listDatas.length > 0) {
        setBookingInfo({
          bookingDate: tableSelected?.bookingDate,
          bookingTime: tableSelected.bookingTime,
          customerName: tableSelected.customerName,
          phoneNumber: tableSelected.phoneNumber,
          seat: tableSelected.seat,
          tableId: tableSelected.tableId,
        });

        let idx = listDatas.findIndex(
          (item) => item._id === tableSelected.tableId
        );
        if (idx > -1) setTable(listDatas[idx]);
      }
    }, []);
    const getDatas = async (paging) => {
      setIsLoading(true);
      let [err, data] = await ProductServices.GetAllTable(paging);
      if (!err && data && data.result.length > 0) {
        setIsLoading(false);
        setListDatas([...data.result]);
        if (tableSelected && tableSelected.tableId !== "")
          data?.result?.map((item) => {
            if (item._id === tableSelected.tableId) {
              setTable(item);
              setBookingInfo({
                tableId: item._id,
                bookingTime: tableSelected?.bookingTime,
                bookingDate: tableSelected?.bookingDate,
                seat: tableSelected?.seat,
                phoneNumber: tableSelected.phoneNumber,
                customerName: tableSelected?.customerName,
              });
            }
          });
      } else {
        setIsLoading(false);
        setListDatas([]);
      }
    };

    const handleTableTime = (listBooking, day) => {
      let activeTimeCopy = [...ActiveTimes];
      let newActiveTimeRange = [...activeTimeRange];
      if (day && listBooking.length > 0) {
        let dSelect = new Date(new Date(day).getDate()).getTime();
        let timeSelected = [];

        listBooking.map((item) => {
          let d = new Date(new Date(item.daySelected).getDate()).getTime();
          if (d == dSelect) {
            timeSelected = [...item.timeSelected];
          }
        });
        if (timeSelected.length > 0) {
          timeSelected.map((time) => {
            newActiveTimeRange.map((at) => {
              if (at.value === time.value) {
                at.isDisabled = true;
              }
            });
          });
        } else {
          newActiveTimeRange.map((at) => {
            at.isDisabled = false;
          });
        }
        setActiveTimeRange([...newActiveTimeRange]);
      } else {
        setActiveTimeRange([...activeTimeCopy]);
      }
    };
    const handleSelectTime = (item) => {
      if (!bookingInfo.bookingDate) {
        toast.warning("Hãy chọn ngày trước!");
      } else {
        let bookingTimes = [...bookingInfo.bookingTime];
        let exist = false;
        if (bookingTimes.length === 0) {
          bookingTimes.push(item);
        } else {
          bookingTimes.map((time) => {
            if (time.value === item.value) return (exist = true);
            else return;
          });
          if (!exist) {
            if (
              item.value >
                Math.max.apply(
                  Math,
                  bookingTimes.map(function (o) {
                    return o.value;
                  })
                ) +
                  1 ||
              item.value <
                Math.min.apply(
                  Math,
                  bookingTimes.map(function (o) {
                    return o.value;
                  })
                ) -
                  1
            ) {
              toast.warning("Chỉ được chọn trong khoản thời gian liền kề!");
            } else {
              bookingTimes.push(item);
            }
          } else {
            if (
              item.value !==
                Math.min.apply(
                  Math,
                  bookingTimes.map(function (o) {
                    return o.value;
                  })
                ) &&
              item.value !==
                Math.max.apply(
                  Math,
                  bookingTimes.map(function (o) {
                    return o.value;
                  })
                )
            ) {
              toast.warning("Thời gian được chọn phải liền kề!");
            } else {
              bookingTimes.map((time, idx) => {
                if (item.value === time.value)
                  return bookingTimes.splice(idx, 1);
                return;
              });
            }
          }
        }
        setBookingInfo({ ...bookingInfo, bookingTime: bookingTimes });
      }
    };
    const isExist = (item, array) => {
      let result = false;
      if (array.length > 0) {
        array.map((arr) => {
          if (arr.value === item.value) return (result = true);
          return;
        });
      }
      return result;
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
    const handleConfirmTable = () => {
      if (bookingInfo.tableId === "") {
        return toast.warning("Hãy chọn bàn!");
      }
      if (bookingInfo.bookingDate === "") {
        return toast.warning("Hãy chọn ngày đặt bàn!");
      }
      if (bookingInfo.bookingTime.length === 0) {
        return toast.warning("Hãy chọn thời gian!");
      }
      if (bookingInfo.customerName === "") {
        return toast.warning("Thêm tên người nhận bàn!");
      }
      if (bookingInfo.phoneNumber === "") {
        return toast.warning("Thêm số điện thoại người đặt bàn!");
      }
      if (bookingInfo.seat === 0) {
        return toast.warning("Thêm số người dự kiến!");
      }
      toast.success("Chọn bàn thành công!");
      handleScrollMenu(ScrollMenuOptions.ORDER);
      return addTable(bookingInfo);
    };
    return (
      <Wrapper ref={ref}>
        <div className="container-title">
          <h2> Lựa chọn bàn ăn phù hợp với nhu cầu bạn nhé</h2>
        </div>
        <div className="table-container d-flex w-100">
          <div className="col-md-6 p-3">
            <div className="title">
              <h4 className="heading">Danh sách bàn ăn</h4>
              <hr className="hr-title" />
            </div>
            <div className="table-group d-flex flex-column">
              {listDatas && listDatas.length > 0
                ? [...Common.GroupArray(listDatas, "floor")].map(
                    (item, index) => {
                      return (
                        <div className="mt-3">
                          <span className="font-weight-bold">
                            Tầng:{item[0]}
                          </span>
                          <div
                            className="table-floor d-flex flex-wrap"
                            key={index}
                          >
                            {item[1] && item[1].length > 0
                              ? item[1].map((tab, idx) => (
                                  <TableItem
                                    table={tab}
                                    currTable={table}
                                    key={idx}
                                    onSelect={(tab) => {
                                      setBookingInfo({
                                        ...bookingInfo,
                                        tableId: tab._id,
                                      });
                                      setTable(tab);
                                    }}
                                  />
                                ))
                              : ""}
                          </div>
                        </div>
                      );
                    }
                  )
                : "Chưa có dữ liệu"}
            </div>
          </div>
          <div className="table-order  col-md-6 d-flex flex-column p-3">
            <div className="title">
              <h4 className="heading">Thông tin chi tiết</h4>
              <hr className="hr-title" />
            </div>

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

            <div className="time-booking d-flex flex-column ">
              <div className="d-flex">
                {" "}
                <span className="label-text "> Chọn ngày:</span>
                <div style={{ maxWidth: "200px" }}>
                  <DatePickerComponent
                    id="datepicker"
                    min={minDate}
                    max={maxDate}
                    format="dd-MM-yyyy"
                    placeholder="Chọn ngày"
                    value={bookingInfo.bookingDate}
                    onChange={(value) => {
                      if (bookingInfo.tableId === "") {
                        return toast.warning("Hãy chọn bàn trước!");
                      }
                      return setBookingInfo({
                        ...bookingInfo,
                        bookingDate: value.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="label-text "> Thời gian:</span>{" "}
                <div className="time-selected d-flex">
                  {handleSelectedTimeRange(bookingInfo.bookingTime).minValue ? (
                    <span>
                      {
                        handleSelectedTimeRange(bookingInfo.bookingTime)
                          .minValue
                      }{" "}
                      đến{" "}
                      {
                        handleSelectedTimeRange(bookingInfo.bookingTime)
                          .maxValue
                      }
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <span
                  className="dropdown-timer"
                  onClick={() => {
                    if (bookingInfo.tableId !== "") {
                      setIsSelectTime(!isSelectTime);
                    } else {
                      toast.warning("Hãy chọn bàn trước!");
                    }
                  }}
                >
                  {isSelectTime ? (
                    <i class="fas fa-angle-down"></i>
                  ) : (
                    <i class="fas fa-angle-right"></i>
                  )}{" "}
                </span>
              </div>
              {isSelectTime ? (
                <div className="time-free d-flex flex-wrap">
                  {activeTimeRange.map((item, idx) => (
                    <span
                      className={`time-free-item ${
                        isExist(item, bookingInfo.bookingTime) &&
                        !item.isDisabled
                          ? "selected"
                          : item.isDisabled
                          ? "disabled"
                          : ""
                      }`}
                      onClick={() => {
                        if (!item.isDisabled) return handleSelectTime(item);
                        return toast.warning("Khung giờ đã được đặt trước!");
                      }}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
              <div className="booking-info d-flex mt-2">
                <span className="label-text ">Tên người nhận bàn:</span>
                <input
                  type="text"
                  value={bookingInfo.customerName}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      customerName: e.target.value,
                    })
                  }
                  className="input-border-bottom ml-4 "
                />
              </div>
              <div className="booking-info d-flex mt-2">
                <span className="label-text ">Số điện thoại:</span>
                <input
                  type="text"
                  className="input-border-bottom ml-4 "
                  value={bookingInfo.phoneNumber}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="booking-info d-flex mt-2">
                <span className="label-text ">Số người:</span>
                <input
                  type="number"
                  className="input-border-bottom ml-4 "
                  value={bookingInfo.seat}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      seat: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="booking-footer d-flex justify-content-center mt-4">
              {" "}
              <span className="special-button" onClick={handleConfirmTable}>
                Xác nhận
              </span>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
        {isLoading && <Loading isShow={isLoading} />}
      </Wrapper>
    );
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    addTable: (table) => {
      dispatch(selectTable(table));
    },
    removeTable: () => {
      dispatch(removeTable());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    tableSelected: state.table,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTable);
const Wrapper = styled.div`
  padding-top: 90px;
  position: relative;
  .heading {
    font-size: 1.7rem;
  }
  .table-container {
    border: 1px solid #000;
    height: 100%;
    padding-bottom: 90px;
  }
  .table-order {
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
  }
  .time-free-item {
    padding: 8px 13px;
    background: var(--yellow-main);
    border-radius: 6px;
    margin: 10px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .time-free-item.selected {
    background: var(--green-main);
  }
  .time-free-item.disabled {
    background: #bdbdbd;
    color: #aaa;
  }
  .dropdown-timer {
    cursor: pointer;
    margin-left: 20px;
    font-size: 1.4rem;
  }

  .time-selected {
    width: 250px;
    white-space: nowrap;
    overflow-x: auto;
    text-overflow: ellipsis;
    &::-webkit-scrollbar {
      background: #aaa;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #aaa;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--yellow-main);
      width: 10px;
    }
    span {
      margin-right: 6px;
      font-weight: bold;
      /* white-space: nowrap; */
      cursor: pointer;
    }
  }
  .label-text {
    width: 160px;
  }
  .special-button {
    cursor: pointer;
    width: 140px;
  }
`;
