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
        <Privacy />
        <Footer />
    </div>
</template>

<script>
import Privacy from '~/components/Privacy/'
import Footer from '~/components/Footer'

export default {
    components: {
        Privacy, Footer
    }
}
</script>

<style>
.text-call{
    color: #3f4b5e;
}
</style>