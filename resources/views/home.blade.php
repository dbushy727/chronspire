
    @include('header')
    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-text">
                        <span class="name">Introducing The Basilisk</span>
                        <hr class="star-light">
                        <span class="skills">Coming Soon</span>
                        <a href="https://www.indiegogo.com">
                            <img id="header-image" src="/img/indie_gogo_logo.png" alt="IndieGogo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Portfolio Grid Section -->
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Collection</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                @foreach($watches as $watch)
                    <div class="col-sm-4 portfolio-item">
                        <a href="/collection/{{$watch->slug}}" class="portfolio-link" data-toggle="modal">
                            <div class="caption">
                                <div class="caption-content">
                                    {{-- <i class="fa fa-search-plus fa-3x"></i> --}}
                                </div>
                            </div>
                            <img src="{{$watch->collection_image_path}}" class="img-responsive" alt="{{$watch->name}}">
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <section class="banner" id="packaging-banner">
        <div class="container">
            <div class="row"></div>
        </div>
    </section>

    <!-- About Section -->

    <section class="assembly" id="assembly">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="about-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nobis! Obcaecati neque, molestiae consequuntur in veritatis similique soluta earum. Et, adipisci ea dolor. Ex, ad! Minus adipisci excepturi iure ea?</p>
                    </div>
                </div>

                <div class="col-sm-6 text-center">
                    <img class="image-drama-shot" src="/img/assembly.png" alt="Assembly">
                </div>

            </div>

        </div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 text-center">
                    <img class="image-drama-shot" src="/img/Baslisk_Auto_Black_DRAMA_Shot.jpg" alt="Basilisk">
                </div>

                <div class="col-sm-6">
                    <div class="about-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nobis! Obcaecati neque, molestiae consequuntur in veritatis similique soluta earum. Et, adipisci ea dolor. Ex, ad! Minus adipisci excepturi iure ea?</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Contact Section -->
    <section id="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
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
    </section>

    <!-- Footer -->
    <footer class="text-center">
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; Chronspire 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

    {{-- <div id="subscribeModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="text-center">Subscribe to Our Mailing List</h3>

            <form name="subscribeModalForm" id="subscribeModalForm" novalidate>
                {{ csrf_field() }}
                <div class="row control-group">
                    <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Name" id="modal-name" required data-validation-required-message="Please enter your name.">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="row control-group">
                    <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" id="modal-email" required data-validation-required-message="Please enter your email address.">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <br>
                <div id="success"></div>
                <div class="row">
                    <div class="form-group col-xs-12 text-center">
                        <button id="saveSubscriberModalButton" class="btn btn-success btn-lg">Subscribe</button>
                    </div>
                </div>
            </form>
            <div class="text-center"><a href="#" id="no-thanks">No Thanks</a></div>

          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal --> --}}
    @include('footer')
