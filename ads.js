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
      border: 1px solid #ddd;
      padding: 0;
      width: 300px;
      max-width: 100%;
      margin: 20px auto;
      background: #f9f9f9;
      font-family: sans-serif;
      text-align: center;
      box-sizing: border-box;"
      oncontextmenu="return false;"
    >
      <!-- Top Right Ad Badge -->
      <div style="
        position: absolute;
        top: 5px;
        right: 5px;
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

      <a href="${ad.url}" target="_blank" style="
        text-decoration: none;
        color: inherit;
        display: inline-block;
        width: 100%;
      ">
        <img src="${ad.img}" alt="Ad"
          draggable="false"
          oncontextmenu="return false;"
          style="
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 8px;
            max-height: 250px;
            object-fit: contain;
            -webkit-user-drag: none;
            user-select: none;
          "
        >
        <div style="
          font-size: 14px;
          font-weight: bold;
          color: black;
        ">
          ${ad.text}
        </div>
      </a>
    </div>
  `);
})();
