<nav id="subNav" class="navbar navbar-default navbar-fixed-top navbar-custom affix">
    <div class="container">

        @if(isset($product))
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="/#collection">Collection</a>
                    </li>
                    <li class="page-scroll">
                        <a href="/#features">Features + Functions</a>
                    </li>
                    <li class="page-scroll">
                        <a href="/#box">The Box</a>
                    </li>
                    <li class="page-scroll">
                        <a href="/#gallery">Gallery</a>
                    </li>
                    <li class="page-scroll">
                        <a href="/#subscribe">Subscribe</a>
                    </li>
                </ul>
            </div>
        @else
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#collection">Collection</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#features">Features + Functions</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#box">The Box</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About Us</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#subscribe">Subscribe</a>
                    </li>
                </ul>
            </div>
        @endif

    </div>
    <!-- /.container-fluid -->
</nav>