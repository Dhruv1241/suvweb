import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import './Services.css';
export default function services() {
  return (
    <div className="main-servise">
      <div className="main-ctrl">
      <div className="container-ser">
        <div className="servise1">
          <div className="servise1-colum1">
            <TbTruckDelivery className="ser-icn"/>
            <h3>Super Fast and free delevery</h3>
          </div>
        </div>
        <div className="servise2">
          
            <div className="servise1-colum1">
              <MdSecurity className="ser-icn"/>
              <h3>Non contact Shiping</h3>
            </div>
          
          
            <div className="servise1-colum1">
              <GiReceiveMoney className="ser-icn"/>
              <h3>Money back gaurantee</h3>
            </div>
          
        </div>
        <div className="servise3">
          <div className="servise1-colum1">
            <RiSecurePaymentLine className="ser-icn"/>
            <h3>Super Secure payment System</h3>
          </div>
        </div>
      </div>

      </div>
          </div>
  );
}
