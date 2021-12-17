import React, { Component } from 'react';
import './styles.css'

export const Header = ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="#">
                <img src="https://static1.squarespace.com/static/550c6a1ae4b07e28b6713306/5751c4711bbee033ddc067ae/5751c4811bbee033ddc0683d/1464977003157/Netflix-logo.png" alt="Netflix" />

            </a>
        </div>
        <div className="header--user">
             <a href="#">
                 <img src="https://th.bing.com/th/id/OIP.RN4qeAs0Bmr_liBVe41euAHaHJ?pid=ImgDet&rs=1" alt="user" />
             </a>
        </div>
    </header>
  );
}