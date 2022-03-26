import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TableTypes = {
  SMALL: 1,
  NORMAL: 2,
  MEDIUM: 3,
  BIG: 4,
};
const TableItem = ({ table }) => {
  const [objClass, setObjClass] = useState("");
  const objTableClass = (table) => {
    let result = "";
    switch (table.type) {
      case TableTypes.SMALL:
        result = "table-item table-small";
        break;
      case TableTypes.MEDIUM:
        result = "table-item table-medium";
        break;
      case TableTypes.BIG:
        result = "table-item table-big";
        break;

      default:
        result = "table-item table-normal";
    }
    setObjClass(result);
  };
  useEffect(() => {
    objTableClass(table);
    return () => {
      setObjClass("");
    };
  }, [table]);
  console.log(objClass);
  return (
    <TableWrapper>
      <button className={objClass} disabled={table.status === 0}>
        {table?.name || ""}
      </button>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 0;
  .table-item {
    appearance: none;
    background-color: #000000;
    border: 1px solid transparent;
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    height: 100%;
    outline: none;
    padding: 5px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }

  .table-small {
    background: #682ef7;
  }
  .table-normal {
    background: #008080;
  }
  .table-medium {
  }
  .table-big {
    background: #1d1f27;
  }
  .table-item.selected {
    background: var(--green-main) !important;
  }
  button:disabled {
    pointer-events: none;
    background: #aaa !important;
  }
`;
export default TableItem;
