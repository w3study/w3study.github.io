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
      border:1px solid #ddd;
      padding:10px;
      max-width:300px;
      text-align:center;
      background:#f9f9f9;
      font-family:sans-serif;
    ">
      <a href="${ad.url}" target="_blank" style="text-decoration:none;color:inherit;">
        <img src="${ad.img}" alt="Ad" style="max-width:100%; height:auto; display:block; margin:0 auto 8px;">
        <div style="font-size:14px; font-weight:bold;">${ad.text}</div>
      </a>
    </div>
  `);
})();
