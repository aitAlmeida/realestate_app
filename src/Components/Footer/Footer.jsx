import React from 'react';
import facebook from '../../Images/facebook.svg';
import instagram from '../../Images/instagram.svg';
import twitter from '../../Images/twitter.svg';

const Footer = () => {
    return (
        <div class="footerHome">
    <div class="footer-Container-home">
        <div class="footer-Container-home-element">
            <div class="logoHome"><img src="/static/media/Logo H Transparent 1.a80fb5c2.svg" alt="" /></div>
            <div class="linkfooter-home">
                <div class="Title-footer-home">LINKS</div>
                <div class="linksTitle-footer-home">
                    <a href="/">Home</a>
                    <a href="/about">About us</a>
                    <a href="/retailers">Retailers</a>
                    <a href="/partners">Partners</a>
                    <a href="/tracking">Tracking</a>
                </div>
            </div>
            <div class="legalfooter-home">
                <div class="Title-footer-home">LEGAL</div>
                <div class="legalsTitle-footer-home">
                    <a href="#">Terms of use</a>
                    <a href="#">Terms of conditions</a>
                    <a href="/privacy">Privacy policy</a>
                    <a href="#">Cookie policy</a>
                </div>
            </div>
            <div class="newsletterfooter-home">
                <div class="Title-footer-home">NEWSLETTER</div>
                <div class="legalsTitle-footer-home">
                    <p class="legal-footer-home-text-small1">Over 10000 people have subscribed</p>
                    <form
                        action=""
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                    >
                        <div class="inputForm-footer">
                            <div><input type="email" placeholder="John.doe@gmail.com" name="EMAIL" required="" class="required email" id="mce-EMAIL" /></div>
                            <button class="subscribe-button-footer" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
                        </div>
                    </form>
                    <p class="legal-footer-home-text-small2">We don’t sell your email and spam</p>
                </div>
            </div>
        </div>
        <div class="footerLast">
            <div class="footerLast-text-1">
                <p class="mr-3">
                    <a href="https://aitalmeida.com">Privacy &amp; terms</a>
                </p>
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            </div>
            <div>
                <p>Copyright @ 2022 aitAlmeida</p>
            </div>
            <div class="footerLast-social">
                <a target="_blank" href="https://www.facebook.com"><img src={facebook} alt="" class="footerLast-social-icon" /></a>
                <a target="_blank" href="https://twitter.com"><img src={twitter} alt="" class="footerLast-social-icon" /></a>
                <a target="_blank" href="https://www.instagram.com"><img src={instagram} alt="" class="footerLast-social-icon" /></a>
            </div>
        </div>
    </div>
</div>

    );
};

export default Footer;