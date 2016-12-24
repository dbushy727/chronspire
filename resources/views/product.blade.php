@include('header')
<div class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                        <h2>{{$product->name}}</h2>
                        <hr class="star-primary">
                </div>
                <div class="col-lg-6">
                    <div class="modal-body">
                        <img src="{{$product->detail_image_path}}" class="img-responsive img-centered" alt="{{$product->name}}">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="modal-body">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4>Details</h4>
                            </div>
                            <div class="panel-body">
                                <ul class="item-details">
                                    @foreach($list_details as $detail)
                                        <li>{{ $detail->body }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        @foreach($paragraph_details as $detail)
                            <p class="text-left">{{ $detail->body }}</p>
                            <br>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('footer')