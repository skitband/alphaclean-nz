<template>
    <header>
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#"><img src="~/assets/images/alpha-clean-logo.png" alt="logo"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                          <ul class="navbar-nav">

                              <li class="nav-item">
                                  <a class="nav-link" href="#howitworks">How it works</a>
                              </li>
                              <li class="nav-item">
                                  <NuxtLink class="nav-link" to="/aboutus">About Us </NuxtLink>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#services">Our Services </a>
                              </li>
                              <li><a href="#booking" class="btn btn-info text-white">GET A QUOTE NOW</a></li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>
.btn-check:focus+.btn-info, .btn-info:focus{
    background-color: #0e315c;
    border-color: #0e315c;
    box-shadow: 0 0 0 0.25rem #17548d;
}
.btn-check:active+.btn-info, .btn-check:checked+.btn-info, .btn-info.active, .btn-info:active, .show>.btn-info.dropdown-toggle{
    background-color: #0e315c;
    border-color: #0e315c;
    box-shadow: 0 0 0 0.25rem #17548d;
}
</style>