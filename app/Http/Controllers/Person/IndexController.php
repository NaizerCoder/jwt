<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;

class IndexController extends Controller
{
    public function __invoke()
    {
       $person = auth()->user();
       return new PersonResource($person);
    }
}
