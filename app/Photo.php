<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $fillable = ['title', 'uri', 'width', 'height'];

    public function categories(){
        return $this->belongsTo('App\Category');
    }
}
