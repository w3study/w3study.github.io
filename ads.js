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
       img: "https://w3study.github.io/assets/images/fb-pic-deepanshu.jpg",
      url: "https://www.facebook.com/share/19MEJCU9fj/",
      text: "🔥 Deal 2 - Limited Time!"
    }
  ];

    var ad = ads[Math.floor(Math.random() * ads.length)];

  document.write(`
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: sans-serif;
      background: #fff;
      margin: 10px auto;
    ">
      <div style="
        position: relative;
        display: inline-block;
        line-height: 0;
      " oncontextmenu="return false;">
        <!-- Ad Badge over image -->
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
 <a href="${ad.url}" target="_blank" style="text-decoration:none;color:inherit;">
          <img src="${ad.img}" alt="Ad"
            draggable="false"
            oncontextmenu="return false;"
            style="
              display: block;
              max-width: 100%;
              height: auto;
              -webkit-user-drag: none;
              user-select: none;
            ">
        </a>
      </div>
      <a href="${ad.url}" target="_blank" style="
        text-decoration:none;
        color:black;
        display:block;
        margin-top:5px;
        font-size:14px;
        font-weight:bold;
      ">
        ${ad.text}
      </a>
    </div>
  `);
})();
