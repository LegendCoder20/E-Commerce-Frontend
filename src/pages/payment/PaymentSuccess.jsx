import React from "react";
import {useSearchParams} from "react-router-dom";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div class="h-96  w-auto text-center pt-10 font-bold">
        <p>Payment Successful - {searchParams.get("reference")}</p>
      </div>
    </>
  );
}

export default PaymentSuccess;
