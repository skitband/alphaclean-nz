<template>
  <section class="testimonial main-block center-block">
      <div class="container">
            <div class="row row-cols-1 row-cols-md-4 row-cols-lg-4 row-cols-sm-2 row-cols-xs-1 g-4">
                <div class="col" v-for="service in services" :key="service.name">
                    <div class="card h-100">
                    <img :src="require(`~/assets/images/services/${service.img}`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <span class="ratings">
                                <i class="fas fa-star stars" v-for="index in 5" :key="index"></i>
                            </span>
                            <h5 class="card-title">{{ service.name }}</h5>
                            <span class="badge text-white badge-services" v-for="item in commercials" :key="item.name">{{ item.name }}</span>
                            <p class="card-text mt-3 text-justify">{{ service.desc }}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-info text-white btn-read-more">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'ServicesCards',
    data () {
        return {
            commercials: [
                { name: 'Gyms' },
                { name: 'Schools' },
                { name: 'Restaurants' },
                { name: 'Offices' },
                { name: 'Bars' },
            ],
            services: [
                {
                    name: 'Window Cleaning',
                    img:  'window-cleaning-1.jpg',
                    desc: 'One of the establishment’s best assets are windows – it provides the light and ventilation your office needs. Make it excellently clean with our window cleaning solutions!'
                },
                {
                    name: 'Carpet Cleaning',
                    img: 'carpet-school.jpg',
                    desc: 'Dirty carpet does not mean replacing the carpet. At affordable prices, we can make it clean through stain, hot steam, odour removal – and other several techniques. Alpha clean makes sure your carpet will be exceptionally clean and good as new!'
                },
                {
                    name: 'Rubbish Removal',
                    img: 'rubbish-hospital.jpg',
                    desc: 'It isn’t just loading the waste out of your place – it involves thorough disinfection after garbage removal! Meaning – they will clean up once they’re finished!'
                },
                {
                    name: 'Vacuuming',
                    img: 'vacuum-restaurant.jpg',
                    desc: 'Throughly cleans floors, upholstery, carpets, chairs and pillows, our vacuuming system makes sure that your furnitures will be bacteria and allergen free.'
                },
                {
                    name: 'Dust Removal',
                    img: 'dust-removal.jpg',
                    desc: 'Get rid of the dust allergens as our cleaning products makes everything around you dust free & smells fresh.'
                },
                {
                    name: 'Buffing',
                    img: 'buffing1.jpg',
                    desc: 'Cleaning with just a simple mop and wax isn’t called a ‘simple’ solution! We can make your floor quickly restored to its original appearance and shiny form with our extraordinary floor maintenance solutions!'
                },
                {
                    name: 'Odour Treatments',
                    img: 'spray-cleaning-office.png',
                    desc: 'During the pandemic period, we need to make sure the air we breathe is clean and virus-free! We do not just remove odours, we also sanitise the air throughout your area!'
                },
                {
                    name: 'Bathroom Cleaning',
                    img: 'bathroom_cleaning.png',
                    desc: 'In every home or office, one of the areas with the highest maintenance in terms of hygiene and cleaning is the comfort room. Due to our primary needs and essentials, we have a higher chances of exposure to bad bacteria from dirt of different human wastes and garbages...'
                },
            ]
        }
    }
}
</script>

<style scoped>
.bg-info{
    background-color: #17548d;
}
p{
    text-align: justify;
}
.card-img-top {
    width: 100%;
    height: 8vw;
    object-fit: cover;
}
@media (max-width: 576px) {
    .card-img-top {
        width: 100%;
        height: 55vw;
        object-fit: cover;
    } 
}
@media (max-width: 992px) {
    .card-img-top {
        width: 100%;
        height: 55vw;
        object-fit: cover;
    } 
}

.card-title{
    font-size: 1.1rem;
}
.card-footer{
    background-color: transparent;
    border: 0px;
    margin-bottom: 10px;
}
.badge-services{
    margin-right: 3px;
    background-color: #17548d;
}
.btn-read-more{
    padding: 12px 88px;
}
.ratings{
    float: right;
    font-size: 10px;
    color: orange;
}
.fa-star{
    margin-right: 3px;
}
</style>