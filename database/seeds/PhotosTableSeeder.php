<?php

use App\Photo;
use Illuminate\Database\Seeder;

class PhotosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        Photo::create([
            'title' => 'Un visage',
            'url' => '/images/photoSamples/1.jpg',
            'category_id' => 1
        ]);
        Photo::create([
            'title' => 'Une photo de voyage',
            'url' => '/images/photoSamples/2.jpg',
            'category_id' => 2
        ]);
        Photo::create([
            'title' => 'Une rue',
            'url' => '/images/photoSamples/3.jpg',
            'category_id' => 3
        ]);
        Photo::create([
            'title' => 'Une autre rue',
            'url' => '/images/photoSamples/4.jpg',
            'category_id' => 3
        ]);
    }
}
