// pour le qr code télécharger la bibliothèque : npm i react-qrcode-logo ou yarn add react-qrcode-logo   

import React from "react";
import ReactDOM from "react-dom";
import { QRCode } from "react-qrcode-logo";



function QrCode() {
  const downloadCode = () => {
    const canvas = document.getElementById("QR");
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `your_name.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="App">
      <h1>Logo QR code download</h1>
      <br />
      <QRCode
        value={
          "https://youtu.be/RtGM6ePvI9s?si=XIg-YElF-Hu-JEoJ"
        } // here you should keep the link/value(string) for which you are generation promocode
        size={350} // the dimension of the QR code (number)
        fgColor={"#3f2a55"}
        eyeColor={"#ff5c39"}
        logoImage="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQw7W5msnkiCnX25IlGx4gaEJw3rB_lFSxQkKodlPg2CqIgibXBZBlwxiKFq6h1ymNu" // URL of the logo you want to use, make sure it is a dynamic url
        logoOpacity={1}
        logoHeight={50}
        logoWidth={50}
        enableCORS={true} // enabling CORS, this is the thing that will bypass that DOM check
        qrStyle="dots" // type of qr code, wether you want dotted ones or the square ones
        eyeRadius={10} // radius of the promocode eye
        id={"QR"}
      />
      <p>
        Click for{" "}
        <button type="button" onClick={() => downloadCode()}>
          Download QR Code
        </button>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<QrCode />, rootElement);

export default QrCode;
