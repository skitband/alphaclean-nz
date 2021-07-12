<template>
  <footer>
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-3">
                    <div class="foot-box">
                        <h6>QUICK LINKS</h6>
                        <ul>
                            <li><NuxtLink to="/" class="links">Home</NuxtLink></li>
                            <li><NuxtLink to="/aboutus" class="links">About Us</NuxtLink></li>
                            <li><NuxtLink to="/howitworks" class="links">How It Works</NuxtLink></li>
                            <li><NuxtLink to="/services" class="links">Our Services</NuxtLink></li>
                            <li><NuxtLink to="/privacy" class="links">Privacy & Policy</NuxtLink></li>
                            <li><a href="#" class="btn btn-white text-uppercase"><i class="fas fa-phone-alt"></i> Call 0273 008 399</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="foot-box">
                        <h6>OUR LOCATIONS</h6>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.519370788337!2d174.8206183!3d-41.3114775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf21547408f4053c6!2sAlpha%20Clean%20Limited!5e0!3m2!1sen!2sph!4v1622708950620!5m2!1sen!2sph&" 
                        width="100%" height="200px" style="border:0;" allowfullscreen="yes" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="subscribe">
                        <h6>SUBSCRIBE</h6>
                        <form class="form-inline" action="booking.html">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="email" class="form-control subscribe-form" id="inlineFormInputGroup" placeholder="Subscribe To Our Mailing List">
                                <button type="submit" class="input-group-addon subscribe-btn"><span class="far fa-paper-plane"></span></button>
                            </div>
                        </form>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-instagram-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-twitter-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-google-plus-square social-media-icons" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.social-media-icons{
    font-size: 35px;
    color: #ffffff !important;
}
.links{
    text-decoration: none;
}
.btn-white{
    background-color: #ffffff;
    padding: 3px 6px;
    color: #17548d;
}
</style>