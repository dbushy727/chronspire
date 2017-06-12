@include('header')
<div id="product" class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                        <h2>{{$product->name}}</h2>
                        <hr class="star-primary">
                </div>
                <div class="col-lg-5">
                    <div class="main-image"><img src="{{$product->detail_image_path}}" class="img-responsive img-centered" alt="{{$product->name}}"></div>
                    @foreach($images as $image)
                    <div class="supporting-image"><img src="{{$image}}" class="img-responsive img-centered"></div>
                    @endforeach
                </div>
                <div class="col-lg-6 col-lg-offset-1">
                    <div>
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <img src="/images/watch-specs2.jpg?w=800" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="showSupportingImageModal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
        <img src="#" class="img-responsive modal-image">
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
@include('footer')