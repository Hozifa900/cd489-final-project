import { useEffect, useRef } from "react";
import video from "../../../assets/main.mp4";
import heroImg from "../../../assets/Original_SQFront.webp";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log("User Agent:", typeof userAgent);
    if (videoRef.current) {
      videoRef.current.play();
    }
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    setTimeout(() => {
      if (titleRef.current) {
        if (window.innerWidth <= 768) {
          titleRef.current.style.top = "250px";
          titleRef.current.style.right = "0px";
        } else {
          titleRef.current.style.top = "300px";
          titleRef.current.style.right = "50px";
        }
      }
      if (imgRef.current) {
        if (window.innerWidth <= 768) {
          imgRef.current.style.top = "300px";
          imgRef.current.style.left = "-30px";
        } else {
          imgRef.current.style.top = "300px";
          imgRef.current.style.left = "-150px";
        }
      }
    }, 500);

    window.addEventListener("scroll", () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(${
          (window.scrollY / 800) * 30 < 30 ? (window.scrollY / 800) * 30 : 30
        }deg)`;
      }
      console.log(window.scrollY);
    });
  }, []);

  return (
    <div className="top-hero">
      <div className="hero">
        <video ref={videoRef} className="video" muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={heroImg} ref={imgRef} className="hero-img" />
        <div className="hero-title-container" ref={titleRef}>
          <p className="hero-title">
            <b>
              Welcome to the home of Blues Hog Original Barbecue Sauce, where
              flavor meets tradition and quality reigns supreme.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
