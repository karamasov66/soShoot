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
            'uri' => 'photos/1.jpg',
            'category_id' => 1,
            'width' => 400,
            'height' => 640
        ]);
        Photo::create([
            'title' => 'Une photo de voyage',
            'uri' => 'photos/2.jpg',
            'category_id' => 2,
            'width' => 400,
            'height' => 250
        ]);
        Photo::create([
            'title' => 'Une rue',
            'uri' => 'photos/3.jpg',
            'category_id' => 3,
            'width' => 400,
            'height' => 250
        ]);
        Photo::create([
            'title' => 'Une autre rue',
            'uri' => 'photos/4.jpg',
            'category_id' => 3,
            'width' => 400,
            'height' => 640
        ]);
    }
}
