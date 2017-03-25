<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 text-center section-heading">
            <h2>Subscribe</h2>
            <hr class="star-primary">
            <p>Subscribe to our mailing list.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
            <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
            <form name="subscribe" id="subscribeForm" novalidate>
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
                <br>
                <div id="success"></div>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <button id="saveSubscriberButton" class="btn btn-success btn-lg">Subscribe</button>
                    </div>
                </div>
            </form>
            <h3 class="text-center" style="display:none;" id="thank-you">Thank you for your submission.</h3>
        </div>
    </div>
</div>