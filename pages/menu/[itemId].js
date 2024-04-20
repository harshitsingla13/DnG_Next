import { useRouter } from "next/router";
import React from "react";

function ItemDetailsPage() {
  const router = useRouter();

  const itemId = router.query.itemId;

  //Send a request to backend to fetch data using API and its id

  return <div>ItemDetailsPage</div>;
}

export default ItemDetailsPage;
