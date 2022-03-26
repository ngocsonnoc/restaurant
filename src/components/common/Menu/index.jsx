import React, { forwardRef } from "react";
import MenuItem from "./MenuItem";
import "./styles.css";

const Menu = forwardRef(({ list, isOrder }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} isOrder={isOrder} />
    ))}
  </main>
));

export default Menu;
