<template>
  <div>
    <Nav />
    <Slider />
    <Clients />
    <HowItWorks />
    <Welcome />
    <Services />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Slider from '~/components/Slider'
import Clients from '~/components/Clients'
import HowItWorks from '~/components/HowItWorks'
import Welcome from '~/components/Welcome'
import Services from '~/components/Services'


export default {
  components: {
    Nav, Slider, Clients, HowItWorks, Welcome, Services
  }
}
</script>
