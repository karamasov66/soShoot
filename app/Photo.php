<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $fillable = ['title', 'url'];

    public function categories(){
        return $this->belongsTo('App\Category');
    }
}
