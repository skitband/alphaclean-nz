<template>
    <section class="booking main-block" id="booking">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-md-6 col-sm-12">
                        <h3 class="text-heading">Don’t wait, Get in touch with us!</h3>
                        <span class="sub-heading">Give us a call or send us a message and we’ll do the rest.</span>
                        <div class="row mt-5 justify-content-center">
                            <div class="col-md-6 col-sm-6 text-center">
                                <div class="card rounded-3 shadow-sm">
                                    <div class="card-header py-3">
                                        <h4 class="my-0 fw-normal">Daily Rate <br> Package From</h4>
                                    </div>
                                    <div class="card-body">
                                        <h1 class="card-title pricing-card-title">${{ parseFloat(price).toFixed(2) }}</h1>
                                        <ul class="list-unstyled mt-3 mb-4">
                                            <li v-for="service in services" :key="service.name">{{ service.name }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="row">
                                <div class="alert alert-primary d-flex align-items-center alert-deepclean" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <div class="row">
                                    <div class="col-md-10 col-sm-12">
                                        <h4 class="alert-heading" style="padding-left: 5px;">ASK ABOUT OUR ONE OFF <br> DEEP CLEAN STARTING FROM</h4>
                                    </div>
                                    <div class="col-md-2 col-sm-12">
                                        <span class="alert-heading-price">$150.00</span>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        <form class="form-wrap mt-5" method="post" @submit.prevent="onSubmit">
                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="emailsent">
                                <h4 class="alert-heading">Thank You!</h4>
                                <p class="text-secondary">Your message has been successfully sent. We will contact you very soon!</p>
                                <a class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click.prevent="emailsent = false"></a>
                            </div>
                            <input v-model="formData.name" type="text" placeholder="Full Name" class="btn-group1 mb-2 mt-2" required>
                            <input v-model="formData.email" type="email" placeholder="Email Address" class="btn-group1 mb-2 mt-2" required>
                            <input v-model="formData.contact" type="number" placeholder="Contact Number" class="btn-group1 mb-2 mt-2" required>
                            <textarea v-model="formData.message" rows="5" class="btn-group1 mb-2 mt-2" required>Message</textarea>
                            <!-- <recaptcha /> -->
                            <button type="submit" class="btn-form mt-3 rounded text-uppercase">Submit <i class="fas fa-hands-wash"></i></button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name: 'Booking',
    data () {
        return {
            emailsent: false,
            price: 89.00,
            services: [
                {
                    name: 'Window Cleaning',
                },
                {
                    name: 'Carpet Cleaning',
                },
                {
                    name: 'Rubbish Removal',
                },
                {
                    name: 'Vacuuming',
                },
                {
                    name: 'Dust Removal',
                },
                {
                    name: 'Buffing',
                },
                {
                    name: 'Odour Treatments',
                },
                {
                    name: 'Bathroom Cleaning',
                }
            ],
            formData:
                {
                    name: '',
                    email: '',
                    contact: '',
                    message: 'Message',
                }

            
        }
    },
    methods: {

        async onSubmit() {
            try {
                const token = await this.$recaptcha.getResponse()
                const output = `
                    <p>Alpha Clean Inquiry</p>
                    <h3>Contact Details</h3>
                    <ul>  
                        <li>Name: ${this.formData.name}</li>
                        <li>Email: ${this.formData.email}</li>
                        <li>Phone: ${this.formData.contact}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${this.formData.message}</p>
                `
                const send = this.$mail.send({
                    subject: 'Alpha Clean Inquiry',
                    from: this.formData.email,
                    name: this.formData.name,
                    html: output
                })
                if(send){
                    // at the end you need to reset recaptcha
                    console.log('Form Submitted Success', token)
                    this.emailsent = true;
                    await this.$recaptcha.reset()
                }
            } catch (error) {
                console.log('Login error:', error)
            }
        },
    }
}
</script>

<style scoped>
.card{
    border: 0px;
}
.booking{
    background:linear-gradient(0deg, #17548dc4, #17548d2e), url('~@/assets/images/booking.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.text-heading{
    font-size: 2.5rem;
    color: #fff;
}
.sub-heading{
    font-size: 1.3rem;
    font-weight: 300;
    color: #fff;
}
.pricing-card-title{
    color: #3f4b5e;
    font-size: 3rem;
    padding-top: 0px;
    margin-top: 0px;
}
ul li{
    font-size: 1rem;
    padding: 5px;
    font-weight: 400;
}
.alert-heading{
    font-size: 1.5rem;
}
.alert-heading-price{
        font-size: 35px;
        color: #ffffff;
        text-align: right;
        font-weight: bolder;
        text-decoration: underline;
    }
@media (max-width: 576px) {
    .alert-heading-price{
        text-align: left !important;
        color: #ffffff;
    }
}
@media (max-width: 992px) {
    .alert-heading-price{
        font-size: 2rem;
        color: #ffffff;
        text-align: right;
    }
}

.alert-deepclean{
    background-color: #17548d;
    border-color: #17548d;
    color: #ffffff;
}
</style>