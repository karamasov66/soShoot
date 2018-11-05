<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//photo
Route::get('photos', 'PhotosController@index');
Route::get('photos/{photo}', 'PhotosController@show');
Route::post('photos','PhotosController@store');
Route::put('photos/{photo}','PhotosController@update');
Route::delete('photos/{photo}', 'PhotosController@delete');

//categories
Route::get('categories', 'CategoryController@index');
