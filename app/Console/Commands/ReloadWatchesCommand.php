<?php

namespace App\Console\Commands;

use App\Product;
use Illuminate\Console\Command;

class ReloadWatchesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reload:watches';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reload the watches info';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Product::all()->each(function ($watch) {
            $watch->delete();
        });

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
