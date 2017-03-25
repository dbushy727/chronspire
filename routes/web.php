<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $watches = [
        'Basilisk Quartz Chrono Collection'           => app('App\Product')->where('type', 'Quartz')->get(),
        'Basilisk Automatic GMT Dual-Time Collection' => app('App\Product')->where('type', 'Automatic')->get(),
    ];

    $gallery = collect(scandir(public_path('img/gallery')))->filter(function ($file) {
        return in_array(pathinfo($file, PATHINFO_EXTENSION), ['jpg', 'png']);
    });

    return view('home', compact('watches', 'gallery'));
});

Route::get('/images/{image}', function ($image, Request $request) {
    $server = League\Glide\ServerFactory::create([
        'source' => public_path('img'),
        'cache' => public_path('img/cache'),
    ]);

    // But, a better approach is to use information from the request
    $server->outputImage($image, $request->all());
})->where('image', '.*');

Route::post('/subscribers', 'SubscriberController@create');

Route::get('/collection/{product_id}', 'ProductController@show');
