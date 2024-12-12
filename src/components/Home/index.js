import React, { useState ,useEffect} from "react";
import Header from "../Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGooglePay } from "react-icons/fa";
import "./index.css";

const Home = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [itemCount, setItemCount] = useState(3425);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortingOption, setSortingOption] = useState("Recommended");
  const [dropdownStates, setDropdownStates] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    IDEALFOR: [],
    OCCASION: [],
    WORK: [],
    FABRIC: [],
    SEGMENT: [],
    SUITABLEFOR: [],
    RAWMATERIALS: [],
    PATTERN: [],
  });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // Set fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const toggleDropdown = (item) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleCheckboxChange = (item, value) => {
    setSelectedFilters((prevState) => {
      const currentValues = prevState[item];
      const isSelected = currentValues.includes(value);
      return {
        ...prevState,
        [item]: isSelected
          ? currentValues.filter((val) => val !== value)
          : [...currentValues, value],
      };
    });
  };

  const toggleSelectAll = (item) => {
    const allOptions = ["Men", "Women", "Baby & Kids"];
    setSelectedFilters((prevState) => ({
      ...prevState,
      [item]:
        selectedFilters[item].length === allOptions.length ? [] : allOptions,
    }));
  };

  return (
    <div className="home">
      <Header />
      <div className="main-hed">
        <h2 className="hed">DISCOVER OUR PRODUCTS</h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    <hr/>
      <div className="header-row">
        <div>
          <span className="butn">{itemCount} ITEMS</span>
          <button onClick={toggleFilter}>
            {isFilterVisible ? <div className="fil">
            <MdKeyboardArrowLeft/>
            <p>HIDE FILTER</p>
            </div> : <div className="fil"><MdKeyboardArrowRight/>
            <p>SHOW FILTER</p></div>}
          </button>
        </div>
        <select value={sortingOption} onChange={handleSortingChange}>
          <option value="Recommended">Recommended</option>
          <option value="Newest First">Newest First</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Price: Low to High">Price: Low to High</option>
        </select>
      </div>
      <hr/>

      <div className="content">

        {isFilterVisible && (
          <div className="sidebar">
            {Object.keys(selectedFilters).map((item, index) => (
              <div className="dropdown" key={index}>
                <button
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown(item)}
                >
                  {item}
                </button>
                {dropdownStates[item] && (
                  <div className="dropdown-menu">
                    <label>
                      <input
                        type="checkbox"
                        checked={
                          selectedFilters[item].length ===
                          ["Men", "Women", "Baby & Kids"]
                            .length
                        }
                        onChange={() => toggleSelectAll(item)}
                      />
                      Select All/Unselect All
                    </label>
                    {["Men", "Women", "Baby & Kids"].map(
                      (option, idx) => (
                        <label key={idx}>
                          <input
                            type="checkbox"
                            checked={selectedFilters[item].includes(option)}
                            onChange={() => handleCheckboxChange(item, option)}
                          />
                          {option}
                        </label>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}


        <div className="main-content">
          {items.map((item) => (
            <div key={item.id} className="item-card">
            <div>
              <img src={item.image} alt={item.title} className="item-image" />
              <h3 className="item-title">{item.title}</h3>
              </div>
              <p className="item-description">{item.description}</p>
              <p className="item-category">{item.category}</p>
              <div className="item-footer">
                <span className="item-price">${item.price}</span>
                <span className="item-rating">⭐ {item.rating.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="footer">
  <div className="footer-row">
    <div className="footer-column">
      <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
      <p className="footer-paragraph">Sign up for updates from Metta Muse.</p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>

    <div className="footer-column">
      <h3 className="footer-heading">Contact Us</h3>
      <p className="footer-paragraph">+44 221 133 5360 <br/>
      customercare@mettamuse.com</p>
      <p className="footer-heading">Currency</p>
      <p className="footer-paragraph">USD</p>
      <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
    </div>
  </div>
<hr/>
  {/* Second Row */}
  <div className="footer-row">
    {/* First Column: Metta Muse */}
    <div className="footer-column">
      <h3 className="footer-heading">Metta Muse</h3>
      <p className="footer-paragraph">About Us</p>
      <p className="footer-paragraph">Stories</p>
      <p className="footer-paragraph">Artisans</p>
      <p className="footer-paragraph">Boutiques</p>
      <p className="footer-paragraph">Contact Us</p>
      <p className="footer-paragraph">EU Compliances Docs</p>
      <p className="footer-paragraph">Join as a Seller</p>
    </div>

    {/* Second Column: Quick Links */}
    <div className="footer-column">
      <h3 className="footer-heading">Quick Links</h3>
      <ul className="quick-links">
      <li><a href="#">Orders & Shipping</a></li>
        <li><a href="#">Join/Login as a Seller</a></li>
        <li><a href="#">Payment & Pricing</a></li>
        <li><a href="#">Return & Refunds</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        

      </ul>
    </div>

    {/* Third Column: Follow Us and Payment Methods */}
    <div className="footer-column">
      <h3 className="footer-heading">Follow Us</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com" className="social-icon instagram"><FaInstagram/></a>
        <a href="https://www.linkedin.com" className="social-icon linkedin"><BiLogoLinkedinSquare/></a>
      </div>

      <h3 className="footer-heading">We Accept</h3>
      <div className="payment-methods">
        <img src="https://res.cloudinary.com/ddw4ubmbj/image/upload/v1733993456/Group_136188_xxstlr.svg" alt="Google Pay" className="payment-icon" />
        <img src="https://res.cloudinary.com/ddw4ubmbj/image/upload/v1733993193/Group_136190_giuo6q.svg" alt="Mastercard" className="payment-icon" />
        <img src="https://res.cloudinary.com/ddw4ubmbj/image/upload/v1733993503/Group_136192_nku0zq.svg" alt="PayPal" className="payment-icon" />
        <img src="https://res.cloudinary.com/ddw4ubmbj/image/upload/v1733993091/Group_136194_cajxao.svg" alt="Apple Pay" className="payment-icon" />
      </div>
    </div>
  </div>

  {/* Footer Copyright */}
  <p className="footer-copyright">Copyright © 2023 Metta Muse. All rights reserved.</p>
</div>

    </div>
  );
};

export default Home;
