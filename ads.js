(function(){
  var ads = [
    {
      img: "https://w3study.github.io/assets/images/IMG-20250628-WA0016.jpg",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    },
    {
      img: "https://yourdomain.com/ads/ad2.jpg",
      url: "https://example.com/offer2",
      text: "🔥 Deal 2 - Limited Time!"
    },
    {
      img: "https://yourdomain.com/ads/ad3.jpg",
      url: "https://example.com/offer3",
      text: "⭐ Exclusive Deal 3!"
    }
  ];

  var ad = ads[Math.floor(Math.random() * ads.length)];

  document.write(`
   <div style="
    position: relative;
    border: none;
    padding: 0;
    width: 300px;
    margin: 0 auto;
    background: #f9f9f9;
    font-family: sans-serif;
    text-align: center;
    box-sizing: border-box;
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
      <a href="${ad.url}" target="_blank" style="text-decoration:none;color:inherit;margin:auto;">
        <img src="${ad.img}" alt="Ad" style="max-width:100%; height:auto; display:block; margin:auto;">
        <div style="font-size:14px; font-weight:bold; color:black;">${ad.text}</div>
      </a>
    </div>
  `);
})();
