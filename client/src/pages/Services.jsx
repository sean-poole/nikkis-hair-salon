import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="main--container">
      <div className="services--container">
        <div className="services--row">
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/hair_styling.jpg" 
              alt="Hair styling" 
            />
            <table>
              <thead>
                <tr>
                  <th>Cuts & Styling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hair Cuts</td>
                  <td>$50+</td>
                </tr>
                <tr>
                  <td>Hair Extensions</td>
                  <td>$150+</td>
                </tr>
                <tr>
                  <td>Updo</td>
                  <td>$80+</td>
                </tr>
                <tr>
                  <td>Braiding</td>
                  <td>$60+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/coloring.jpg" 
              alt="Hair coloring" 
            />
            <table>
              <thead>
                <tr>
                  <th>Coloring</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single Process</td>
                  <td>$100+</td>
                </tr>
                <tr>
                  <td>Double Process</td>
                  <td>$140+</td>
                </tr>
                <tr>
                  <td>Highlights</td>
                  <td>$200+</td>
                </tr>
                <tr>
                  <td>Gloss / Toner</td>
                  <td>$50+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/treatments.jpg" 
              alt="Hair treatments" 
            />
            <table>
              <thead>
                <tr>
                  <th>Treatments & Processes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hair Treatments</td>
                  <td>$40+</td>
                </tr>
                <tr>
                  <td>Scalp Therapy</td>
                  <td>$60+</td>
                </tr>
                <tr>
                  <td>Brazilian Blowout</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td>Keratin Straightening</td>
                  <td>$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="services--row">
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/skin-care.jpg" 
              alt="Skin care" 
            />
            <table>
              <thead>
                <tr>
                  <th>Skin Care</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Renewal</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>Deep Cleansing Treatment</td>
                  <td>$90</td>
                </tr>
                <tr>
                  <td>Botanical Skin Resurfacing</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>Plant Peel Add-on</td>
                  <td>$20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/makeup.jpg" 
              alt="Makeup" 
            />
            <table>
              <thead>
                <tr>
                  <th>Makeup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application</td>
                  <td>$70</td>
                </tr>
                <tr>
                  <td>Custom Instruction</td>
                  <td>$90+</td>
                </tr>
                <tr>
                  <td>Lashes</td>
                  <td>$25</td>
                </tr>
                <tr>
                  <td>Brow Shaping</td>
                  <td>$20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="services--card">
            <img 
              className="services--img"
              src="images/services/special.jpg" 
              alt="Special events" 
            />
            <table>
              <thead>
                <tr>
                  <th>Special Occassions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="services--special-desc">
                    <div className="services--special">
                      <p>Weddings & other special events prices are available upon private consultation.</p>
                      <Link to="/Booking" className="services--link">CONTACT US</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
