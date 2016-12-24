<?php

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
    $watches = app('App\Product')->all();
    return view('home', compact('watches'));
});

Route::post('/subscribers', 'SubscriberController@create');

Route::get('/collection/{product_id}', 'ProductController@show');
