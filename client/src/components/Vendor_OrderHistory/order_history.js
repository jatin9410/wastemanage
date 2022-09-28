import React from "react";
import { Link } from "react-router-dom";
import OHstyles from "./order_history.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import vendor_ic from "../Dashboard_Vendor/vendor.jpg";

export const OrderHistory = () => {
  function OrderDetails(props) {
    return (
      <tr>
        <td>{props.OrderNo}</td>
        <td>{props.PickupSlot}</td>
        <td>{props.SellerName}</td>
        <td>{props.DropSlot}</td>
        <td className={OHstyles.invoice}>{props.Invoice}</td>
      </tr>
    );
  }

  return (
    <div className={OHstyles.out_container}>
      <div>
        <div className={OHstyles.greet_vendor}>
          <Link to="/profile/vendor">
            {/* GRADIENT BAR */}
            <div className="vendor-image">
              <img
                src={vendor_ic}
                alt="profile_img"
                className={OHstyles.vendor_img}
              ></img>
              {/* VENDOR IMAGE */}
            </div>
            <div className={OHstyles.vendor_greeting_text}>
              <h2>Welcome!</h2>
              {/* GREET VENDOR */}
            </div>
          </Link>
        </div>

        <div className={OHstyles.vendor_order_history}>
          <div className={OHstyles.list_heading}>
            <h2>ORDER HISTORY</h2>
          </div>

          <div className={OHstyles.bgeffect}>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>ORDER NO.</th>
                  <th>PICKUP SLOT</th>
                  <th>CUSTOMER NAME</th>
                  <th>DROP SLOT</th>
                  <th>INVOICE</th>
                </tr>
              </thead>

             
            </Table>
          </div>

          <div className={OHstyles.return_btn}>
            <Link to="/dashboard/vendor">
              <Button variant="primary">RETURN TO DASHBOARD</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
