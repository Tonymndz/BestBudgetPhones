import React from 'react';
import "./Card.css"
import { IPhoneData } from './data';

let Card = ({ ebayPrice, price, phone, imageLink, screenInches, screenPixels, RAM, CPU, CPUCore, batteryLife, cameraPixels, ebayLink, storage, comparison, comparisonLink, oponnentPhone, comparisonsFromSiteText = "Comparison from Phonemore.com", comparisonButtonText = `See In-depth full comparison`, param2nd = "vs", priceHeading = false}: IPhoneData): JSX.Element => {
  let Comparison = () => {
    let ComparisonIsFalse = comparison === false;
    if (ComparisonIsFalse) return;

    let versus = [phone, param2nd, oponnentPhone] 

    return <div className="Comparison">
      <div className="flexRow">
        <span >{versus[0]}</span>
        <span >{versus[1]}</span>
        <span >{versus[2]}</span>
      </div>
      <a href={comparisonLink} className="ComparisonButton">
      <img src="https://img.icons8.com/cute-clipart/25/000000/iphone-x.png" alt="Tiny Phone" />
        {comparisonButtonText}
      </a>
      <span id="comparisonText"></span>
    </div>
}

  return <div className="Card">
    <h2 className="Title">{phone} <span className="Price">({price})</span></h2>
    <hr />
    <div className="Left_And_Right_FlexBox">
      <img className="PhoneImage" src={imageLink} alt="Phone"/>
      <div className="Details1">
          <span className="Header">{phone}</span>
          <div className="TopBox">
            <div className="BatteryBox">
              <img className="ResizeImage" src="https://img.icons8.com/nolan/64/medium-battery.png" alt="Battery"/>
              <span id="Top">{batteryLife}</span>
              <span id="Middle">Hours</span>
              <span id="Bottom">Battery Life</span>
            </div>
            <div className="ScreenSizeBox">
              <img className="ResizeImage" src="https://img.icons8.com/cotton/64/000000/smartphone-tablet.png" alt="Screen Size" />
              <span id="Top">{screenInches}</span>
              <span id="Middle">Inches</span>
              <span id="Bottom">{screenPixels} Pixels</span>
            </div>
            <div className="StorageBox">
              <img className="ResizeImage" src="https://img.icons8.com/dusk/64/000000/hdd.png" alt="Storage" />
              <span id="Top">{storage}</span>
              <span id="Middle">Storage</span>
              <span id="Bottom"></span>
            </div>
          </div>
          <div className="BottomBox">
            <div className="RAMBox">
              <img className="ResizeImage" src="https://img.icons8.com/plasticine/100/000000/computer-ram.png" alt="RAM"/>
              <span id="Top">{RAM}</span>
              <span id="Middle">RAM</span>
              <span id="Bottom"></span>
            </div>
            <div className="CameraBox">
              <img className="ResizeImage" src="https://img.icons8.com/ultraviolet/40/000000/camera.png" alt="Camera" />
              <span id="Top">{cameraPixels} Front</span>
              <span id="Middle">Million Pixels</span>
              <span id="Bottom">8 Back</span>
            </div>
            <div className="CPUBox">
              <img className="ResizeImage" src="https://img.icons8.com/color/48/000000/smartphone-cpu.png" alt="CPU" />
              <span id="Top">{CPU}</span>
              <span id="Middle">CPU</span>
              <span id="Bottom">{CPUCore}</span>
            </div>
          </div>
          <a href={ebayLink} className="BottomButton">
            <img src="https://img.icons8.com/color/48/000000/ebay.png" alt="ebay"/>
            {ebayPrice}
          </a>
      </div>
    </div>
    {Comparison()}
  </div>
}

export default Card;

/*
  Title: Motorola Moto Z Droid X
  Screen Size(Inches): 5.5" [Bottom Pixel-Size] X
  Ram X
  CPU
  Storage Options
  Battery Life (Hours) X
  Example Ebay Price
*/