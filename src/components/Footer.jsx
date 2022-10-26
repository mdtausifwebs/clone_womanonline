import React from "react";
import { Link } from "react-router-dom";
import footercss from "../StyleCss/footer.module.css";
const Footer = () => {
  return (
    <div className={footercss.container}>
      <h1>Footer</h1>
      <div className={footercss.footersec}>
        <div className={footercss.manu}>
          <div className={footercss.manutext}>
            <Link to="/support">SUPPORT</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/trending">NOW TRENDING</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/company">COMPANY</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/refundpolicy">REFUND POLICY</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/privacypolicy">PRIVACY POLICY</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/returnpolicy">RETURN POLICY</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/fashionawards">FASHION AWARDS</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/deliverypolicy">DELIVERY POLICY</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/contactuse">CONTACT US</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/sitemap">SITEMAP</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/storeelocation">STORE LOCATOR</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/investorralations">INVESTOR RELATIONS</Link>
          </div>
          <div className={footercss.manutext}>
            <Link to="/blog">BLOG</Link>
          </div>
        </div>
        <div className={footercss.socialMedia}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
        <div className={footercss.contactDetails}>
          <p>
            Email Us - customercare@tcnsclothing.com or call us at
            +91-7583896939 or WhatsApp at +91-8448198618 (from 10 AM to 6 PM,
            Mon to Sun). We are closed on bank holidays.
          </p>
        </div>
      </div>
      <div className={footercss.copyRight}>
        <p>© Copyright 2021 W. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
