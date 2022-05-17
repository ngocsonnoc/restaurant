import React, { forwardRef } from "react";
import MenuItem from "./MenuItem";
import "./styles.css";

const Menu = forwardRef(
  ({ list, isOrder, getData, viewMore, loading, hasMore }, ref) => (
    <main ref={ref}>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} isOrder={isOrder} />
      ))}
      {viewMore ? (
        <div className="text-center py-5">
          <span
            className="view__mores bottom"
            onClick={() => {
              if (hasMore && !loading) {
                getData();
              }
            }}
          >
            {loading ? "Đang tải..." : hasMore ? "Xem thêm" : "Kết thúc"}
          </span>
        </div>
      ) : (
        ""
      )}
    </main>
  )
);

export default Menu;
