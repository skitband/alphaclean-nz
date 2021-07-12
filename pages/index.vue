<template>
  <div>
    <Nav />
    <Slider />
    <Clients />
    <!-- <HowItWorks /> -->
    <Welcome />
    <Services />
    <ServicesCards />
    <Booking />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Slider from '~/components/Slider'
import Clients from '~/components/Clients'
import HowItWorks from '~/components/HowItWorks'
import Welcome from '~/components/Welcome'
import Services from '~/components/Services'
import ServicesCards from '~/components/ServicesCards'
import Booking from '~/components/Booking'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav, Slider, Clients, HowItWorks, Welcome, Services, ServicesCards, Booking, Footer
  }
}
</script>
