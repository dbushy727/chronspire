<div class="container">
    @foreach ($watches as $name => $collection)
    <div class="collection">
        <div class="row">
            <div class="col-lg-12 text-center section-heading">
                <h2>{{ $name }}</h2>
                <hr class="star-primary">
            </div>
        </div>
        <div class="row">
            @foreach($collection as $watch)
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
    @endforeach
</div>