<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductDetail;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show($slug)
    {
        try {
            $product = Product::where('slug', $slug)->firstOrFail();
        } catch (\Exception $e) {
            return redirect('/');
        }

        $list_details = ProductDetail::where([
            'product_id' => $product->id,
            'type' => 'list',
        ])->get();

        $paragraph_details = ProductDetail::where([
            'product_id' => $product->id,
            'type' => 'paragraph',
        ])->get();

        $images = $this->getImages($product);

        return view('product', compact('product', 'list_details', 'paragraph_details', 'images'));
    }

    protected function getImages($product)
    {
        return collect(
            scandir(public_path($product->product_images_path))
        )->filter(function ($file) {
            return in_array(pathinfo($file, PATHINFO_EXTENSION), ['jpg', 'png']);
        })->map(function ($file) use ($product) {
            return "/{$product->product_images_path}/{$file}";
        });
    }
}
