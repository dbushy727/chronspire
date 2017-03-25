<section id="gallery">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 text-center section-heading">
                <h2>Gallery</h2>
                <hr class="star-primary">
            </div>
        </div>
        <div class="row">
            @foreach($gallery as $photo)
                <div class="col-sm-4 gallery-item">
                    <img src="/images/gallery/{{$photo}}?w=800&h=800&fit=crop" class="img-responsive">
                </div>
            @endforeach
        </div>
    </div>
</section>