(function(){
  var ads = [
    {
      img: "https://w3study.github.io/assets/images/insta-add.gif",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    },
    {
      img: "https://w3study.github.io/assets/images/fb-pic-deepanshu.jpg",
      url: "https://www.facebook.com/share/19MEJCU9fj/",
      text: "🔥 Deal 2 - Limited Time!"
    },
    {
      img: "https://w3study.githbu.io/assets/images/insta-dp-deepanshu.jpg",
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
      width: 100%;
      max-width: 80%;
      margin: 10px auto;
      background: none;
      font-family: sans-serif;
      text-align: center;
      oncontextmenu="return false;"
    >
      <!-- Top Right Ad Badge -->
      <div style="
        position: absolute;
        top: 0;
        right: 0;
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
            margin: 0 auto;
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
          display: none;
        ">
          ${ad.text}
        </div>
      </a>
    </div>
  `);
})();
