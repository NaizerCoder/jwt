<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        //$data['password_confirmation'] = Hash::make($data['password_confirmation']);
        User::firstOrCreate(['email'=>$data['email']],$data);
        return response([]);
    }
}
