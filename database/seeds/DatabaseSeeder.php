<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $watches = config('watches');

        foreach ($watches as $watch) {
            $product = app('App\Product')->create([
                'name'                  => $watch['name'],
                'slug'                  => str_slug($watch['type'].' '.$watch['name']),
                'type'                  => $watch['type'],
                'collection_image_path' => $watch['collection_image_path'],
                'detail_image_path'     => $watch['detail_image_path'],
                'product_images_path'   => $watch['product_images_path'],
            ]);

            foreach ($watch['details'] as $detail) {
                if ($detail['type'] == 'list') {
                    app('App\ProductDetail')->create([
                        'product_id' => $product->id,
                        'type' => 'list',
                        'body' => $detail['body'],
                    ]);
                } else {
                    app('App\ProductDetail')->create([
                        'product_id' => $product->id,
                        'type' => 'paragraph',
                        'body' => $detail['body'],
                    ]);
                }
            }
        }
    }
}
