// const main = document.querySelector("main");

const header = document.querySelector("header");
const footer = document.querySelector("footer");
header.insertAdjacentHTML(
  "afterbegin",
  `
  <!-- <div class="burger-menu"></div> -->
  <div class="wrapper-burger">
    <div class="burger">
      <span></span>
    </div>
  </div>
  <div class="block-navbar-1">
    <div class="logo-header"></div>
    <nav class="nav" id="top">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
  </div>
  <div class="block-navbar-2">
    <button>Get consultation</button>
    <div class="link-reg-log_in">
      <div class="person"></div>
      <a href="#">Log in / Register</a>
    </div>
  </div>
`
);

footer.insertAdjacentHTML(
  "afterbegin",
  `
  <!-- First Column -->
  <div class="first-col">
    <div class="logo-footer"></div>
    <p>
      Createx Online School is a leader in online studying. We have lots
      of courses and programs from the main market experts. We provide
      relevant approaches to online learning, internships and employment
      in the largest companies in the country.
    </p>
    <div class="list-social-media-icons"></div>
  </div>
  <!-- Second Column -->
  <div class="second-col">
    <h2>Site Map</h2>
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Courses</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </div>
  <!-- Third Column -->
  <div class="third-col">
    <h2>Courses</h2>
    <ul>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Management</a></li>
      <li><a href="#">HR & Recruting</a></li>
      <li><a href="#">Design</a></li>
      <li><a href="#">Development</a></li>
    </ul>
  </div>
  <!-- Fourth Column -->
  <div class="fourth-col">
    <h2>Contact Us</h2>
    <div class="block-data">
      <div class="phone-icon"></div>
      <div class="phone-number">(405) 555-0128</div>
      <div class="email-icon"></div>
      <div class="email-footer">hello@createx.com</div>
    </div>
  </div>
  <!-- Fifth Column -->
  <div class="fifth-col">
    <h2>Sign up to our newsletter</h2>
    <button>Email address <span class="span-right-arrow"></span></button>
    <p>
      *Subscribe to our newsletter to receive communications and early
      updates from Createx SEO Agency.
    </p>
  </div>
  <!-- End -->
  <div class="end-footer">
    <div class="create-info">
      © All rights reserved. Made with <span class="span-heart"></span> by
      Createx Studio
    </div>
    <div class="gtt"><a href="#top">GO TO TOP</a></div>
  </div>`
);
