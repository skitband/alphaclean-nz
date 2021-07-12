<template>
  <section class="testimonial main-block center-block">
      <div class="container">
          <div class="row row-cols-1 row-cols-md-4 row-cols-lg-4 row-cols-sm-2 row-cols-xs-1 g-4">
            <div class="col" v-for="service in services" :key="service.name">
              <NuxtLink class="url-box" :to="`/services/${service.id}`">
                <figure class='newsCard news-Slide-up '>
                  <img :src="require(`~/assets/images/services/${service.img}`)" alt="Avatar" />
                  <div class='newsCaption px-4'>
                    <div class="d-flex align-items-center justify-content-between cnt-title">
                      <h5 class='newsCaption-title text-white m-0'>{{ service.name }}</h5> <i class="fas fa-arrow-alt-circle-right "></i>
                    </div>
                    <div class='newsCaption-content d-flex '>
                      <p class="col-12 pt-3 px-0">{{ service.desc }} </p>
                    </div>
                    <p class="col-12"><b>Learn More</b></p>
                  </div>
                  <span class="overlay"></span>
                </figure>
              </Nuxtlink>
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
                    id: 1,
                    name: 'Window Cleaning',
                    img:  'window-cleaning-1.jpg',
                    desc: 'One of the establishment’s best assets are windows – it provides the light and ventilation your office needs ...'
                },
                {
                    id: 2,
                    name: 'Carpet Cleaning',
                    img: 'carpet-school.jpg',
                    desc: 'Dirty carpet does not mean replacing the carpet. At affordable prices, we can make it clean through stain ...'
                },
                {
                    id: 3,
                    name: 'Rubbish Removal',
                    img: 'rubbish-hospital.jpg',
                    desc: 'It isn’t just loading the waste out of your place – it involves thorough disinfection ...'
                },
                {
                    id: 4,
                    name: 'Vacuuming',
                    img: 'vacuum-restaurant.jpg',
                    desc: 'Throughly cleans floors, upholstery, carpets, chairs and pillows, our vacuuming system makes ...'
                },
                {
                    id: 5,
                    name: 'Dust Removal',
                    img: 'dust-removal.jpg',
                    desc: 'Get rid of the dust allergens as our cleaning products makes everything around you dust free & smells fresh.'
                },
                {
                    id: 6,
                    name: 'Buffing',
                    img: 'buffing1.jpg',
                    desc: 'Cleaning with just a simple mop and wax isn’t called a ‘simple’ solution! We can make your floor quickly restored ...'
                },
                {
                    id: 7,
                    name: 'Odour Treatments',
                    img: 'spray-cleaning-office.png',
                    desc: 'During the pandemic period, we need to make sure the air we breathe is clean and virus-free! ...'
                },
                {
                    id: 8,
                    name: 'Bathroom Cleaning',
                    img: 'bathroom_cleaning.png',
                    desc: 'In every home or office, one of the areas with the highest maintenance in terms of hygiene and ...'
                },
            ]
        }
    }
}
</script>

<style>

</style>