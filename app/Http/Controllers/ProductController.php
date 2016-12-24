<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductDetail;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
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

        return view('product', compact('product', 'list_details', 'paragraph_details'));
    }
}
