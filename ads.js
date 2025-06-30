(function(){
  var ads = [
    {
      img: "https://w3study.github.io/assets/images/insta-dp-deepanshu.jpg",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    },
    {
      img: "https://w3study.github.io/assets/images/insta-dp-deepanshu.jpg",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    },
    {
      img: "https://w3study.github.io/assets/images/insta-dp-deepanshu.jpg",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    }
  ];

  var ad = ads[Math.floor(Math.random() * ads.length)];

  document.write(`
   <div style="
    position: relative;
    border: none;
    padding: 0;
    width: 80%;
    max-width: 100%;
    margin: 0 auto;
    background: #ddd;
    font-family: sans-serif;
    text-align: center;
  ">
    <!-- Top Right Ad Badge -->
    <div style="
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      background: #ffcc00;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 3px;
      z-index: 10;
    ">
      Ad
    </div>
      <a href="${ad.url}" target="_blank" style="text-decoration:none;color:inherit;" class="no-style">
        <img src="${ad.img}" alt="Ad" style="max-width:100%; height:auto; display:block; margin:auto; width:100%; max-height:250px;">
        <div style="font-size:14px; font-weight:bold; color:black; display:none;">${ad.text}</div>
      </a>
    </div>
  `);
})();
