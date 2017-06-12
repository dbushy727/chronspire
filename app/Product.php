<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'type',
        'collection_image_path',
        'detail_image_path',
        'product_images_path',
    ];
}
