<template>
    <div>
        <header class="header-style2 fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <NuxtLink class="navbar-brand" to="/"><img src="~/assets/images/alpha-clean-logo.png" alt="logo"></NuxtLink><span class="text-call"><i class="fas fa-phone-alt"></i> Call Us 0273 008 399</span>
                    </div>
                </div>
            </div>
        </header>
        <div class="mt-5"></div>
        <section class="booking-details center-block main-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{ service.name }}</h2>
                        <h6>RATED A+ IN CLEANING SERVICES</h6>
                    </div>
                </div>
                <NuxtLink to="/#services" style="color: #17548d;text-decoration: none;"> <i class="fas fa-arrow-circle-left"></i> Back</NuxtLink>
                <div class="row mt-5">
                    <div class="col-md-8 set-sm-fit mb-4">
                        <div class="preference-title">
                            <h4>{{ service.name }} Service</h4>
                        </div>
                        <div class="preferences">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="preference-about_home justify-content-center">
                                        <p>{{ service.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Footer from '~/components/Footer'

export default {
    components: {
        Footer
    },
    data () {
        return {
            id: this.$route.params.id,
            services: [
                {
                    id: '1',
                    name: 'Window Cleaning',
                    img:  'window-cleaning-1.jpg',
                    desc: 'One of the establishment’s best assets are windows – it provides the light and ventilation your office needs. Make it excellently clean with our window cleaning solutions!'
                },
                {
                    id: '2',
                    name: 'Carpet Cleaning',
                    img: 'carpet-school.jpg',
                    desc: 'Dirty carpet does not mean replacing the carpet. At affordable prices, we can make it clean through stain, hot steam, odour removal – and other several techniques. Alpha clean makes sure your carpet will be exceptionally clean and good as new!'
                },
                {
                    id: '3',
                    name: 'Rubbish Removal',
                    img: 'rubbish-hospital.jpg',
                    desc: 'It isn’t just loading the waste out of your place – it involves thorough disinfection after garbage removal! Meaning – they will clean up once they’re finished!'
                },
                {
                    id: '4',
                    name: 'Vacuuming',
                    img: 'vacuum-restaurant.jpg',
                    desc: 'Throughly cleans floors, upholstery, carpets, chairs and pillows, our vacuuming system makes sure that your furnitures will be bacteria and allergen free.'
                },
                {
                    id: '5',
                    name: 'Dust Removal',
                    img: 'dust-removal.jpg',
                    desc: 'Get rid of the dust allergens as our cleaning products makes everything around you dust free & smells fresh.'
                },
                {
                    id: '6',
                    name: 'Buffing',
                    img: 'buffing1.jpg',
                    desc: 'Cleaning with just a simple mop and wax isn’t called a ‘simple’ solution! We can make your floor quickly restored to its original appearance and shiny form with our extraordinary floor maintenance solutions!'
                },
                {
                    id: '7',
                    name: 'Odour Treatments',
                    img: 'spray-cleaning-office.png',
                    desc: 'During the pandemic period, we need to make sure the air we breathe is clean and virus-free! We do not just remove odours, we also sanitise the air throughout your area!'
                },
                {
                    id: '8',
                    name: 'Bathroom Cleaning',
                    img: 'bathroom_cleaning.png',
                    desc: 'In every home or office, one of the areas with the highest maintenance in terms of hygiene and cleaning is the comfort room. Due to our primary needs and essentials, we have a higher chances of exposure to bad bacteria from dirt of different human wastes and garbages...'
                },
            ]
        }
    },
    computed: {
        service () {
            return this.services.find(service => service.id === this.id)
        }
    }
}
</script>

<style>
.text-call{
    color: #3f4b5e;
}
</style>