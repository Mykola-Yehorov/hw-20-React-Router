import React from "react";
import './photos.css';

import pic1 from "./img/1.jpg";
import pic2 from "./img/2.jpg";
import pic3 from "./img/3.jpg";
import pic4 from "./img/4.jpg";
import pic5 from "./img/5.jpg";
import pic6 from "./img/6.jpg";
import pic7 from "./img/7.jpg";
import pic8 from "./img/8.jpg";
import pic9 from "./img/9.jpg";
import pic10 from "./img/10.jpg";
import pic11 from "./img/11.jpg";
import pic12 from "./img/12.jpg";


const ShopComponent = () => {
    return (
    <div class="container">

        <div class="gallery">
				<div class="gallery__title">
					Тому що, старанні та активні студенти ;)
				</div>
				<div class="gallery__inner">
					<img class="gallery__inner-item" src={pic1} alt="" />
					<img class="gallery__inner-item" src={pic2} alt="" />
					<img class="gallery__inner-item" src={pic3} alt="" />
					<img class="gallery__inner-item" src={pic4} alt="" />
					<img class="gallery__inner-item" src={pic5} alt="" />
					<img class="gallery__inner-item" src={pic6} alt="" />
					<img class="gallery__inner-item" src={pic7} alt="" />
					<img class="gallery__inner-item" src={pic8} alt="" />
					<img class="gallery__inner-item" src={pic9} alt="" />
					<img class="gallery__inner-item" src={pic10} alt="" />
					<img class="gallery__inner-item" src={pic11} alt="" />
                    <img class="gallery__inner-item" src={pic12} alt="" />
				</div>
				<div class="gallery__text">
					Вибачте, якщо когось не додав. Ви всі класні!
				</div>
			</div>
    </div>    
    );
  }

  export default ShopComponent;