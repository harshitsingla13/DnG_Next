import Link from "next/link";
import React, { Fragment } from "react";

function Menu() {
  return (
    <Fragment>
      <div>Menu</div>
      <ul>
        <li>
          <Link href="/menu/1">Atta cookies</Link>
        </li>
        <li>
          <Link href="/menu/2">Ajwain cookies</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Menu;
