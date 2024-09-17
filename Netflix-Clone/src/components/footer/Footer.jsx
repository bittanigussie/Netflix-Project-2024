import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li> Audio Description</li>
              <li>Investr RElations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jops</li>

              <li>Cookie perferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>terms of use</li>
              <li>corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>media center</li>
              <li>privacy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>service code</p>
        </div>
        <div className='copy_write'>
          &copy; 1997-2024 Netflix,inc.
        </div>
      </div>
    </div>
  );
}

export default Footer