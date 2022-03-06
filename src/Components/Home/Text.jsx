import React from 'react';
import home1 from '../../Images/home1.png';


const Text = () => {
    return (
        <>
            <div>
    <div className="affordable-Part paddingHomeCenter">
        <div className="affordable-Part-text">
            <p style={{ margin: "15px 0px" }} className="smallType-text-affordable">LOCAL RETAILERS</p>
            <div style={{ margin: "15px 0px" }} className="bigType-text-affordable">
                <p className="bigType-text-affordable">Affordable</p>
                <p className="bigType-text-affordable">&amp; Scalable</p>
                <p className="bigType-text-affordable">Last-Mile</p>
            </div>
            <p style={{ margin: "15px 0px" }} className="smallType-text-affordable smallType-text-affordable-long">
                Discover how we can partner with you to provide last-mile delivery solutions that work for you and your customers.
            </p>
            <a style={{ margin: "15px 0px",display: 'inline-block' }} className="smallType-text-affordable-link-part" href="/retailers">
                <span className="smallType-text-affordable smallType-text-affordable-link">Learn more</span>
                <img src="/static/media/akar-icons_arrow-right.9678e305.svg" alt="" className="arrowLink" />
            </a>
        </div>
        <div className="affordableCard-part">
            <img src={home1} alt="" className="affordableCard" />
        </div>
    </div>
</div>

        </>
    );
};

export default Text;