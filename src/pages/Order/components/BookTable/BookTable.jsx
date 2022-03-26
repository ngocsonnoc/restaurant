import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { table } from "../../../../assets/data/table";
import TableItem from "./TableItem";
import tableImage from "../../../../assets/image/pexels-photo-1267320.png";
import Common from "../../../../based/Common";

const BookTable = forwardRef((props, ref) => {
  const [isSelectTime, setIsSelectTime] = useState(false);
  var dt = new Date();
  var minDate = new Date();
  var maxDate = new Date(dt.setDate(dt.getDate() + 3));
  var r = [...Common.GroupArray(table, "floor")].map((item) =>
    console.log(item[0])
  );
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
            {table && table.length > 0
              ? [...Common.GroupArray(table, "floor")].map((item, index) => {
                  return (
                    <div className="mt-3">
                      <span className="font-weight-bold">Tầng:{item[0]}</span>
                      <div className="table-floor d-flex flex-wrap" key={index}>
                        {item[1] && item[1].length > 0
                          ? item[1].map((tab, idx) => (
                              <TableItem table={tab} key={idx} />
                            ))
                          : ""}
                      </div>
                    </div>
                  );
                })
              : "Chưa có dữ liệu"}
          </div>
        </div>
        <div className="table-order  col-md-6 d-flex flex-column p-3">
          <div className="title">
            <h4 className="heading">Thông tin chi tiết</h4>
            <hr className="hr-title" />
          </div>
          <div className="image-preview" style={{ height: 140 }}>
            <img src={tableImage} alt="" />
          </div>
          <div className="table-name">
            <span>Bàn 1</span> - <span>Tầng N1</span> -
            <span>Số ghế tối đa:4</span>
          </div>
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
                />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="label-text "> Thời gian:</span>{" "}
              <div className="time-selected d-flex">
                <span>8h-8h45</span> <span>8h-8h45</span> <span>8h-8h45</span>
                <span>8h-8h45</span> <span>8h-8h45</span> <span>8h-8h45</span>
              </div>
              <span
                className="dropdown-timer"
                onClick={() => setIsSelectTime(!isSelectTime)}
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
                <span className="time-free-item">8h-8h45</span>
                <span className="time-free-item">9h-9h45</span>
                <span className="time-free-item selected">10h-10h45</span>
                <span className="time-free-item">11h-11h45</span>
                <span className="time-free-item disable">12h-12h45</span>
                <span className="time-free-item">13h-13h45</span>
                <span className="time-free-item">14h-14h45</span>
                <span className="time-free-item">15h-15h45</span>
                <span className="time-free-item">16h-16h45</span>
                <span className="time-free-item">17h-17h45</span>
                <span className="time-free-item">18h-18h45</span>
                <span className="time-free-item">19h-19h45</span>
                <span className="time-free-item">20h-20h45</span>
              </div>
            ) : (
              ""
            )}
            <div className="booking-info d-flex mt-2">
              <span className="label-text ">Tên người nhận bàn:</span>
              <input type="text" className="input-border-bottom ml-4 " />
            </div>
            <div className="booking-info d-flex mt-2">
              <span className="label-text ">Số điện thoại:</span>
              <input type="text" className="input-border-bottom ml-4 " />
            </div>
            <div className="booking-info d-flex mt-2">
              <span className="label-text ">Số người:</span>
              <input type="number" className="input-border-bottom ml-4 " />
            </div>
          </div>
          <div className="booking-footer d-flex justify-content-center mt-4">
            {" "}
            <span className="special-button">Xác nhận</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

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
      img {
        max-width: 100%;
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
  .time-free-item.disable {
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
export default BookTable;
