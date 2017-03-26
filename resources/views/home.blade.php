
    @include('header')
    @include('sub-nav')

    <div class="page-wrapper">
        <!-- Header -->
        <header>
            <div class="container-fluid">
                <div class="row">
                    <img class="splash_image" src="/img/main.jpg" alt="Basilisk">
                </div>
            </div>
        </header>

        <section id="collection">
            @include('portfolio')
        </section>

        <section class="banner" id="first-banner">
            <div class="container">
                <div class="row"></div>
            </div>
        </section>

        <section id="features">
            @include('features')
        </section>

        <section class="banner" id="second-banner">
            <div class="container">
                <div class="row"></div>
            </div>
        </section>

        <section id="box">
            @include('box')
        </section>

        <section class="banner" id="third-banner">
            <div class="container">
                <div class="row"></div>
            </div>
        </section>

        <section id="gallery">
            @include('gallery')
        </section>

        <div class="separator"></div>

        <!-- Contact Section -->
        <section id="subscribe">
            @include('subscribe')

            <div class="separator"></div>

        </section>



        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
        <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
            <a class="btn btn-primary" href="#page-top">
                <i class="fa fa-chevron-up"></i>
            </a>
        </div>

        <div id="subscribeModal" class="modal fade" tabindex="-1" role="dialog">
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
        </div><!-- /.modal -->
        @include('footer')
    </div>
