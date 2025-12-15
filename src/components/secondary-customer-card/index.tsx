import React from "react";
import { CustomerImg } from "ui/images/customer-img";
import { CustomerName } from "ui/text-fields/customer-name";
import { BlueCustomerReview } from "ui/text-fields/blue-customer-review";
import * as css from "./index.css";

function SecondaryCustomerCard({src, name, review}){
    return(
        <div className={css.container}>
            <CustomerImg src={src}/>
            <CustomerName>{name}</CustomerName>
            <BlueCustomerReview>{review}</BlueCustomerReview>
        </div>
    )
}

export { SecondaryCustomerCard }