<template>
  <section class="slider">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="slider-content">
                        <h1 class="slider-heading mt-5">Cleaning Made Easy</h1>
                        <h3 class="slider-subheading">Rated A+ Cleaning Service Experts</h3>
                        <form class="form-wrap mb-5" action="booking.html">
                            <div class="btn-group mb-5" role="group" aria-label="Basic example">
                                
                                <!-- <input type="text" placeholder="Email Address" class="btn-group1">
                                <input type="number" placeholder="Zip Code" class="btn-group2">
                                <button type="submit" class="btn-form">Continue <i class="fas fa-chevron-right"></i></button> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Slider'
}
</script>

<style scoped>
.slider-heading{
    mix-blend-mode: color-dodge;
}
.slider-subheading{
    mix-blend-mode: color-dodge;
}
input{
    background-color: white;
}
.btn-form{
    color: #ffffff;
}
</style>