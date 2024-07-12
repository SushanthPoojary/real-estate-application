import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {

    const [imageInd, setImageInd] = useState(null);

    const changeSlide = (dir) => {
        dir === "left" ? imageInd === 0 ? setImageInd(images.length - 1) : setImageInd(imageInd - 1) : imageInd === images.length - 1 ? setImageInd(0) : setImageInd(imageInd + 1);
    }

    return (
        <div className="slider">
            {imageInd !== null && (<div className="full-slider">
                <div className="arrow" onClick={() => changeSlide("left")}>
                    <img src="/arrow.png" alt="" />
                </div>
                <div className="img-cont">
                    <img src={images[imageInd]} alt="" />
                </div>
                <div className="arrow" onClick={() => changeSlide("right")}>
                    <img src="/arrow.png" className="right-arrow" alt="" />
                </div>
                <div className="close" onClick={() => setImageInd(null)}>X</div>
            </div>)}
            <div className="big-image">
                <img src={images[0]} alt="" onClick={() => setImageInd(0)} />
            </div>
            <div className="small-images">
                {
                    images.slice(1).map((image, index) => (
                        <img src={image} alt="" key={index} onClick={() => setImageInd(index + 1)} />
                    ))

                }
            </div>
        </div>
    )
}

export default Slider;