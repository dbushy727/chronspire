@include('header')
<div class="page-wrapper">
    <div class="contact">
        <div class="container-fluid">
            <div class="col-lg-12 text-center section-heading">
                <h2>Contact Us</h2>
                <hr class="star-primary">
            </div>
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <p>Our work is our passion, and we love to discuss our watches! </p> <br>
                    <p>If you have a comment or question, please fill out the form below and someone will be in contact with you shortly.</p> <br>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                        <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                        <form name="contact" id="contactForm" novalidate>
                            {{ csrf_field() }}
                            <div class="row control-group">
                                <div class="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Name</label>
                                    <input type="text" name="name" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="row control-group">
                                <div class="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Email Address</label>
                                    <input type="email" name="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="row control-group">
                                <div class="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea class="form-control" name="message" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>

                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br>
                            <div class="row control-group">
                                <div class="form-group col-xs-12">
                                    <input type="checkbox" name="subscribe" id="subscribe">
                                    &nbsp; Check this box if you'd like to subscribe.
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br>
                            <div id="success"></div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <button id="sendContactMessageButton" class="btn btn-success btn-lg">Contact</button>
                                </div>
                            </div>
                        </form>
                        <h3 class="text-center" style="display:none;" id="thank-you">Thank you for your submission.</h3>
                    </div>
                </div>
            </div>

            <div class="separator"></div>
        </div>
    </div>
</div>
@include('footer')