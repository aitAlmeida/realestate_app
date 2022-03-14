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

            <div>
                <div className='cardPartof paddingHomeCenter'>
                    

{/*///////////////////////////////////////////////////////// */}

<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
</div>
<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
</div>
<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
</div>











{/*///////////////////////////////////////////////////////// */}















                    {/* <a className='Oncard' href='#'>
                        <div className='api api1'>
                            <img src='' alt='' className='icon-card-img-api'/>
                        </div>
                        <div className='Oncard-small-title'>APP</div>
                        <p className='Oncard-small-text'>Integrate same day delivery</p>
                        <div className='arrowBlack-card'><img src='' alt=''/> </div>
                    </a>
                    <a className='Oncard' href='#'>
                        <div className='api api1'>
                            <img src='' alt='' className='icon-card-img-api'/>
                        </div>
                        <div className='Oncard-small-title'>APP</div>
                        <p className='Oncard-small-text'>Integrate same day delivery</p>
                        <div className='arrowBlack-card'><img src='' alt=''/> </div>
                    </a> */}
                </div>
            </div>

            <div>
                <div class="fully-part paddingHomeCenter">
                    <div class="fully-part-text-content">
                        <div class="blancFake"></div>
                        <div class="fully-partBIG">
                            <p class="bigType-text-affordable bigType-text-affordable-fully">Fully Automated</p>
                            <p class="bigType-text-affordable bigType-text-affordable-fully">Last-mile</p>
                        </div>
                        <p class="smallType-text-affordable smallType-text-affordable-long smallType-text-fully-long">
                            We automatically fulfill your orders for you in Shopify, and notify you &amp; your customer each step of the way via SMS &amp; email.
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Text;