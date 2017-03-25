<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <title>Chronspire</title>

    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="/css/app.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-tops" class="indexs">

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom affix">
        <div class="container">

            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span><i class="fa fa-bars"></i>
                </button>
                <a href="/"><img id="logo" src="/img/Chronspire-Logo-white.png" alt="logo"></a>
            </div>

            @if(isset($product))
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
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
                            <a href="/#about">About Us</a>
                        </li>
                        <li class="page-scroll">
                            <a href="/#subscribe">Subscribe</a>
                        </li>
                    </ul>
                </div>
            @else
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
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

            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>