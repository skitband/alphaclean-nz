<template>
  <section class="our-client">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3">
                    <span>OUR CLIENTS</span>
                </div>
                <VueSlickCarousel v-bind="settings">
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/cg.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/hemp.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/jj.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/johnsons.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/pivotal.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/the_grand.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/tss.png" class="img-fluid" alt="client logo"></a>
                    </div>
                    <div class="slick-items">
                        <a href="#"><img src="~/assets/images/clients/ucg.png" class="img-fluid" alt="client logo"></a>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Clients',
    components: { VueSlickCarousel },
    data () {
        return {
            settings: {
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "arrows": true,
                "centerPadding": "20px",
                "centerMode": true,
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            }
        }
    }
}
</script>

<style>
.img-fluid{
    width: 120px;
    height: 80px;
}
button.slick-prev:before, button.slick-next:before {
    color: #45c3d3 !important;
}
.slick-items{
    display: inline-flex;
    align-items: center;
    width: auto;
}
</style>