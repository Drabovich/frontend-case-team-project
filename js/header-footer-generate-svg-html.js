function elementFromHtml(html) {
  /*function for contain html*/
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

//------------------------------------------
const logo_black =
  elementFromHtml(`<svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_51338_1583)">
<path d="M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z" fill="#1E212C"/>
<path d="M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z" fill="#1E212C"/>
<path d="M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z" fill="#1E212C"/>
<path d="M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z" fill="#1E212C"/>
<path d="M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z" fill="#1E212C"/>
<path d="M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z" fill="#1E212C"/>
<path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF3F3A"/>
<path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF3F3A"/>
</g>
<defs>
<clipPath id="clip0_51338_1583">
<rect width="130" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

`);

const logo_white =
  elementFromHtml(`<svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_51338_2145)">
  <path d="M0 11.1008C0 5.00078 3.3 1.30078 8.7 1.30078C12.8 1.30078 16.1 3.80078 16.7 7.50078C16.8 7.90078 16.5 8.20078 16.1 8.20078H13.5C13.2 8.20078 13 8.00078 12.9 7.70078C12.4 5.80078 10.8 4.60078 8.7 4.60078C5.8 4.60078 4 7.10078 4 11.1008C4 15.1008 5.8 17.6008 8.8 17.6008C10.9 17.6008 12.4 16.5008 13 14.7008C13.1 14.4008 13.3 14.2008 13.6 14.2008H16.2C16.6 14.2008 16.9 14.6008 16.8 14.9008C16.2 18.5008 13 20.9008 8.8 20.9008C3.3 20.9008 0 17.1008 0 11.1008Z" fill="white"/>
  <path d="M24.2997 20.401H21.3997C21.0997 20.401 20.8997 20.201 20.8997 19.901V2.60104C20.8997 2.20104 21.2997 1.80104 21.6997 1.80104H28.6997C32.7997 1.80104 35.2997 4.10104 35.2997 7.70104C35.2997 9.80104 34.2997 11.701 32.5997 12.701C32.1997 12.901 32.0997 13.401 32.2997 13.701L35.3997 19.601C35.5997 19.901 35.2997 20.301 34.9997 20.301H31.6997C31.4997 20.301 31.2997 20.201 31.1997 20.001L28.2997 14.001C28.1997 13.701 27.8997 13.601 27.5997 13.601H25.2997C24.9997 13.601 24.7997 13.801 24.7997 14.101V20.001C24.8997 20.201 24.5997 20.401 24.2997 20.401ZM24.8997 10.201C24.8997 10.501 25.0997 10.701 25.3997 10.701H28.3997C30.3997 10.701 31.4997 9.60104 31.4997 7.80104C31.4997 6.00104 30.2997 4.90104 28.3997 4.90104H25.4997C25.1997 4.90104 24.9997 5.10104 24.9997 5.40104V10.201H24.8997Z" fill="white"/>
  <path d="M51.4998 20.401H40.4998C40.0998 20.401 39.7998 20.101 39.7998 19.701V2.50104C39.7998 2.10104 40.0998 1.80104 40.4998 1.80104H51.4998C51.8998 1.80104 52.1998 2.10104 52.1998 2.50104V4.40104C52.1998 4.80104 51.8998 5.10104 51.4998 5.10104H44.1998C43.8998 5.10104 43.6998 5.30104 43.6998 5.60104V9.00104C43.6998 9.30104 43.8998 9.50104 44.1998 9.50104H50.9998C51.3998 9.50104 51.6998 9.80104 51.6998 10.201V11.901C51.6998 12.301 51.3998 12.601 50.9998 12.601H44.1998C43.8998 12.601 43.6998 12.801 43.6998 13.101V16.901C43.6998 17.201 43.8998 17.401 44.1998 17.401H51.4998C51.8998 17.401 52.1998 17.701 52.1998 18.101V20.001C52.1998 20.101 51.8998 20.401 51.4998 20.401Z" fill="white"/>
  <path d="M66.9999 15.901H61.2999C60.9999 15.901 60.7999 16.101 60.6999 16.301L59.5999 20.001C59.4999 20.301 59.2999 20.401 58.9999 20.401H56.3999C55.9999 20.401 55.6999 20.001 55.7999 19.601L61.7999 2.20104C61.8999 2.00104 62.0999 1.80104 62.3999 1.80104H66.0999C66.3999 1.80104 66.5999 2.00104 66.6999 2.20104L72.6999 19.601C72.7999 20.001 72.4999 20.401 72.0999 20.401H69.1999C68.8999 20.401 68.6999 20.201 68.5999 20.001L67.4999 16.301C67.4999 16.101 67.1999 15.901 66.9999 15.901ZM62.0999 13.001H66.1999C66.3999 13.001 66.4999 12.801 66.4999 12.601L64.2999 5.60104H64.0999L61.8999 12.601C61.7999 12.801 61.8999 13.001 62.0999 13.001Z" fill="white"/>
  <path d="M79.0001 19.7014V5.50143C79.0001 5.20143 78.8001 5.00143 78.5001 5.00143H74.1001C73.7001 5.00143 73.3001 4.70143 73.3001 4.20143V2.50143C73.3001 2.10143 73.6001 1.70143 74.1001 1.70143H87.7001C88.1001 1.70143 88.5001 2.00143 88.5001 2.50143V4.20143C88.5001 4.60143 88.2001 5.00143 87.7001 5.00143H83.3001C83.0001 5.00143 82.8001 5.20143 82.8001 5.50143V19.8014C82.8001 20.2014 82.5001 20.5014 82.1001 20.5014H79.6001C79.3001 20.4014 79.0001 20.1014 79.0001 19.7014Z" fill="white"/>
  <path d="M103.8 20.401H92.7999C92.3999 20.401 92.0999 20.101 92.0999 19.701V2.50104C92.0999 2.10104 92.3999 1.80104 92.7999 1.80104H103.8C104.2 1.80104 104.5 2.10104 104.5 2.50104V4.40104C104.5 4.80104 104.2 5.10104 103.8 5.10104H96.4999C96.1999 5.10104 95.9999 5.30104 95.9999 5.60104V9.00104C95.9999 9.30104 96.1999 9.50104 96.4999 9.50104H103.3C103.7 9.50104 104 9.80104 104 10.201V11.901C104 12.301 103.7 12.601 103.3 12.601H96.4999C96.1999 12.601 95.9999 12.801 95.9999 13.101V16.901C95.9999 17.201 96.1999 17.401 96.4999 17.401H103.8C104.2 17.401 104.5 17.701 104.5 18.101V20.001C104.5 20.101 104.2 20.401 103.8 20.401Z" fill="white"/>
  <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF3F3A"/>
  <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF3F3A"/>
  </g>
  <defs>
  <clipPath id="clip0_51338_2145">
  <rect width="130" height="22" fill="white"/>
  </clipPath>
  </defs>
  </svg>
`);

const div_logo_header = document.querySelector(".logo-header");
const div_logo_footer = document.querySelector(".logo-footer");

div_logo_header.appendChild(logo_black);
div_logo_footer.appendChild(logo_white);

//------------------------------------------

const person =
  elementFromHtml(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00019 1.70866C7.38936 1.70866 6.08353 3.0145 6.08353 4.62533C6.08353 6.23616 7.38936 7.54199 9.00019 7.54199C10.611 7.54199 11.9169 6.23616 11.9169 4.62533C11.9169 3.0145 10.611 1.70866 9.00019 1.70866ZM4.41686 4.62533C4.41686 2.09402 6.46889 0.0419922 9.00019 0.0419922C11.5315 0.0419922 13.5835 2.09402 13.5835 4.62533C13.5835 7.15663 11.5315 9.20866 9.00019 9.20866C6.46889 9.20866 4.41686 7.15663 4.41686 4.62533Z" fill="#424551"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08691 11.7087C3.50914 11.7087 3.05755 11.99 2.87424 12.3942C2.62053 12.9536 2.39078 13.6196 2.33656 14.2513C2.31233 14.5337 2.43006 14.7418 2.5923 14.8426C3.44993 15.3753 5.43719 16.292 9.00019 16.292C12.5632 16.292 14.5505 15.3753 15.4081 14.8426C15.5703 14.7418 15.6881 14.5337 15.6638 14.2513C15.6096 13.6196 15.3799 12.9536 15.1261 12.3942C14.9428 11.99 14.4912 11.7087 13.9135 11.7087H4.08691ZM1.35639 11.7058C1.86301 10.5887 2.99428 10.042 4.08691 10.042H13.9135C15.0061 10.042 16.1374 10.5887 16.644 11.7058C16.935 12.3474 17.2472 13.2099 17.3244 14.1088C17.3946 14.9273 17.0544 15.7819 16.2876 16.2583C15.1596 16.959 12.8665 17.9587 9.00019 17.9587C5.13386 17.9587 2.84078 16.959 1.71283 16.2583C0.945947 15.7819 0.605747 14.9273 0.676001 14.1088C0.753149 13.2099 1.0654 12.3474 1.35639 11.7058Z" fill="#424551"/>
  </svg>
  
`);

const div_person = document.querySelector(".person");

div_person.appendChild(person);

//------------------------------------------

// const burger_menu =
//   elementFromHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
// `);

// const div_burger_menu = document.querySelector(".burger-menu");

// div_burger_menu.appendChild(burger_menu);

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

//------------------------------------------

const heart_icon =
  elementFromHtml(`<svg class="heart" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99974 13.2715C4.9337 11.5252 3.22366 9.78955 2.39675 8.28361C1.55041 6.74228 1.62425 5.4441 2.09389 4.52273C3.05921 2.62892 5.80427 2.02333 7.47678 4.13865L7.9997 4.80001L8.52266 4.13868C10.1955 2.02327 12.9407 2.62896 13.906 4.52273C14.3756 5.44409 14.4494 6.74226 13.603 8.28359C12.776 9.78954 11.0659 11.5252 7.99974 13.2715ZM7.99977 2.73726C5.64696 0.501518 2.17604 1.42555 0.905976 3.91723C0.208948 5.2847 0.199427 7.05212 1.22802 8.92536C2.24749 10.782 4.28009 12.7417 7.67724 14.6194L7.99973 14.7976L8.32222 14.6194C11.7195 12.7417 13.7522 10.782 14.7717 8.92537C15.8004 7.05214 15.7909 5.28472 15.0939 3.91723C13.8238 1.4255 10.3528 0.501552 7.99977 2.73726Z" fill="#FF3F3A"/>
  </svg>
`);

const span_heart = document.querySelector(".span-heart");

span_heart.appendChild(heart_icon);

let heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
  heart.classList.toggle("heart-animation");
});

//------------------------------------------

const email_icon =
  elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1668 11.9993V4.66602C15.1668 3.56145 14.2714 2.66602 13.1668 2.66602L2.83349 2.66603C1.72893 2.66603 0.833496 3.56146 0.833496 4.66603V11.9993C0.833496 13.1039 1.72893 13.9993 2.8335 13.9993L13.1668 13.9993C14.2714 13.9993 15.1668 13.1039 15.1668 11.9993ZM13.8335 6.17232V11.9993C13.8335 12.3675 13.535 12.666 13.1668 12.666L2.8335 12.666C2.46531 12.666 2.16683 12.3675 2.16683 11.9993L2.16683 6.17223L6.87561 9.3742C7.55433 9.83573 8.44613 9.83573 9.12485 9.3742L13.8335 6.17232ZM13.8259 4.56509C13.7773 4.24479 13.5007 3.99935 13.1668 3.99935L2.83349 3.99936C2.49965 3.99936 2.22311 4.24476 2.17443 4.56501L7.62535 8.27164C7.8516 8.42548 8.14886 8.42548 8.3751 8.27164L13.8259 4.56509Z" fill="white"/>
</svg>
`);

const div_email_icon = document.querySelector(".email-icon");

div_email_icon.appendChild(email_icon);

//------------------------------------------

const phone_black_icon =
  elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66683 1.94857C5.11454 1.94857 4.66683 2.39628 4.66683 2.94857V13.0527C4.66683 13.605 5.11454 14.0527 5.66683 14.0527H10.3335C10.8858 14.0527 11.3335 13.605 11.3335 13.0527V2.94857C11.3335 2.39628 10.8858 1.94857 10.3335 1.94857H10.2779L10.1155 2.3382C10.012 2.58661 9.76928 2.74842 9.50016 2.74842H6.50016C6.23105 2.74842 5.98832 2.58661 5.8848 2.3382L5.72242 1.94857H5.66683ZM3.3335 2.94857C3.3335 1.6599 4.37817 0.615234 5.66683 0.615234H10.3335C11.6222 0.615234 12.6668 1.6599 12.6668 2.94857V13.0527C12.6668 14.3414 11.6222 15.3861 10.3335 15.3861H5.66683C4.37816 15.3861 3.3335 14.3414 3.3335 13.0527V2.94857Z" fill="white"/>
  </svg>
`);

const div_phone_icon = document.querySelector(".phone-icon");

div_phone_icon.appendChild(phone_black_icon);

//------------------------------------------

const right_arrow_icon =
  elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86193 4.52925C10.1223 4.2689 10.5444 4.2689 10.8047 4.52925L13.8047 7.52925C14.0651 7.7896 14.0651 8.21171 13.8047 8.47206L10.8047 11.4721C10.5444 11.7324 10.1223 11.7324 9.86193 11.4721C9.60158 11.2117 9.60158 10.7896 9.86193 10.5292L11.7239 8.66732H2.66667C2.29848 8.66732 2 8.36884 2 8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398H11.7239L9.86193 5.47206C9.60158 5.21171 9.60158 4.7896 9.86193 4.52925Z" fill="white"/>
  </svg>
  
`);

const span_right_arrow = document.querySelector(".span-right-arrow");

span_right_arrow.appendChild(right_arrow_icon);