<template>
  <section class="testimonial main-block center-block">
      <div class="container mt-5">
<div class="row">
  <!-- CARD 1-->
<div class="col-lg-4">
<a href='#' class="url-box" >
  <figure class='newsCard news-Slide-up '>
    <img src="https://source.unsplash.com/1600x900/?background"/>
    <div class='newsCaption px-4'>
    <div class="d-flex align-items-center justify-content-between cnt-title">
     <h5 class='newsCaption-title text-white m-0'>Title Examples</h5> <i class="fas fa-arrow-alt-circle-right "></i>
     </div>
     <div class='newsCaption-content d-flex '>
     <p class="col-10 py-3 px-0">Lorem ipsum description examples. </p>
    </div>
    </div>
    <span class="overlay"></span>
  </figure>
</a>
</div> <!-- end card1-->
  
  
    <!-- CARD 2-->
<div class="col-lg-4">
<a href='#' class="url-box" >
  <figure class='newsCard news-Slide-up '>
    <img src="https://source.unsplash.com/1600x900/?background"/>
    <div class='newsCaption px-4'>
    <div class="d-flex align-items-center justify-content-between cnt-title">
     <h5 class='newsCaption-title text-white m-0'>Title Examples</h5> <i class="fas fa-arrow-alt-circle-right "></i>
     </div>
     <div class='newsCaption-content d-flex '>
     <p class="col-10 py-3 px-0">Lorem ipsum description examples. </p>
    </div>
    </div>
    <span class="overlay"></span>
  </figure>
</a>
</div> <!-- end card2-->
  
    <!-- CARD 3-->
<div class="col-lg-4">
<a href='#' class="url-box" >
  <figure class='newsCard news-Slide-up '>
    <img src="https://source.unsplash.com/1600x900/?background"/>
    <div class='newsCaption px-4'>
    <div class="d-flex align-items-center justify-content-between cnt-title">
     <h5 class='newsCaption-title text-white m-0'>Title Examples</h5> <i class="fas fa-arrow-alt-circle-right "></i>
     </div>
     <div class='newsCaption-content d-flex '>
     <p class="col-10 py-3 px-0">Lorem ipsum description examples. </p>
    </div>
    </div>
    <span class="overlay"></span>
  </figure>
</a>
</div> <!-- end card3-->
  
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

<style>

</style>