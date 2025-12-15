import React from "react";
import { CustomerImg } from "ui/images/customer-img";
import { CustomerName } from "ui/text-fields/customer-name";
import { WhiteCustomerReview } from "ui/text-fields/white-customer-review";
import * as css from "./index.css";

function MainCustomerCard({src, name, review}){
    return(
        <div className={css.container}>
            <CustomerImg src={src}/>
            <CustomerName>{name}</CustomerName>
            <WhiteCustomerReview>{review}</WhiteCustomerReview>
        </div>
    )
}

export { MainCustomerCard }