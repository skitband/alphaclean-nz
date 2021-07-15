<template>
  <footer class="footer-32892 pb-0">
      <div class="site-section">
          <div class="container">
            <div class="row">

            <div class="col-4 pr-md-5 mb-4 mb-md-0">
              <h3>About Us</h3>
              <p class="mb-4">New Zealand owned and operated business, based in Wellington offering high quality industrial and and residential cleaning services.</p>
              <img src="~/assets/images/logo-whitebg.png" alt="logo">
            </div>
            <div class="col-3 mb-4 mb-md-0 offset-md-1">
              <h3>Our Location</h3>
              <ul class="list-unstyled quick-info mb-4">
                <li><i class="fas fa-map-marked-alt"></i><span style="margin-right: 5px;"></span> 43 Rotherham Terrace, Miramar <br> 6022 , New Zealand</li>  
                <li><a href="tel:+640273008399" class="d-flex align-items-center"><i class="fas fa-phone-alt"></i>  <span style="margin-right: 5px;"></span> +64 027 3008399</a></li>
                <li><a href="mailto:info@alphaclean.nz" class="d-flex align-items-center"><i class="fas fa-envelope"></i>  <span style="margin-right: 5px;"></span> info@alphaclean.nz</a></li>
                
              </ul>
              <p></p>
              <!-- <img src="~/assets/images/logo-whitebg.png" alt="logo"> -->
            </div>


            <div class="col-4 mb-4 mb-md-0 " >
              <h3 style="font-size: 2rem; text-align: right;">DEEP CLEANING STARTING FROM <span style="text-decoration: underline; font-weight: bolder;">$150.00</span></h3>
              <form class="subscribe" action="booking.html">
                <input type="email" class="form-control" placeholder="Subscribe To Our Mailing List" required>
                <button type="submit" class="btn btn-submit">Send</button>
              </form>
            </div>
            
            <div class="col-12">
              <div class="py-5 footer-menu-wrap align-items-center">
                    <div>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/Alpahclean" target="_new"><i class="fab fa-facebook-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-instagram-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-twitter-square social-media-icons" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-google-plus-square social-media-icons" aria-hidden="true"></i></a>
                        </div>
                    </div>
                <ul class="list-unstyled footer-menu mr-auto">
                  <li><a href="#howitworks">How It Works</a></li>
                  <li><NuxtLink to="/aboutus">About Us</NuxtLink></li>
                  <li><a href="#services">Our Services</a></li>
                  <li><NuxtLink to="/privacy">Privacy & Policy</NuxtLink></li>
                </ul>
                
                
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