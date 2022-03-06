import React from 'react';
import facebook from '../../Images/facebook.svg';


const Cards = () => {
    return (
        <div>
        <div class="cardPartof paddingHomeCenter">
            <a class="Oncard" href="">
                <div class="api api1"><img src={facebook} alt="" class="icon-card-img-api" /></div>
                <div class="Oncard-small-title">Shopify App</div>
                <p class="Oncard-small-text">Integrate Same-Day delivery into your Shopify store.</p>
                <div class="arrowBlack-card"><img src="" alt="" /></div>
            </a>
            <a class="Oncard" href="">
                <div class="api api2"><img src={facebook} alt="" class="icon-card-img-api" /></div>
                <div class="Oncard-small-title">Web portal</div>
                <p class="Oncard-small-text">Easily manage deliveries directly from our platform.</p>
                <div class="arrowBlack-card"><img src="" alt="" /></div>
            </a>
            <a class="Oncard" href="">
                <div class="api api3"><img src={facebook} alt="" class="icon-card-img-api" /></div>
                <div class="Oncard-small-title">Partner App</div>
                <p class="Oncard-small-text">Coming soon!</p>
                <div class="arrowBlack-card"><img src="" alt="" /></div>
            </a>
        </div>
    </div>
    
    );
};

export default Cards;