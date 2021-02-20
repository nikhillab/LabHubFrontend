import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runBodysegment = async () => {
    const net = await bodyPix.load();
    console.log("BodyPix model loaded.");
    //  Loop and detect 
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections

      const person = await net.segmentPersonParts(video);
      //console.log(person);

      //const coloredPartImage = bodyPix.toMask(person);
      const coloredPartImage = bodyPix.toColoredPartMask(person);
      const opacity = 0.7;
      const flipHorizontal = false;
      const maskBlurAmount = 0;
      const canvas = canvasRef.current;

      bodyPix.drawMask(
        canvas,
        video,
        coloredPartImage,
        opacity,
        maskBlurAmount,
        flipHorizontal
      );
    }
  };
runBodysegment()
  return (
    <div >
      <Webcam
        ref={webcamRef}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 250,
          height: 300,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{

          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 250,
          height: 200,
        }}
      />
      
    </div>
  );
}

export default App;
