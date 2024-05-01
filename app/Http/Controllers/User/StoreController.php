<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);
        $data['password_confirmation'] = Hash::make($data['password_confirmation']);
        $user = User::where('email',$data['email'])->first();

        if($user) return response(['error' => 'Пользователь уже существует'],403);

        $user = User::create($data);
        $token = auth()->tokenById($user->id);
        return response(['access_token' => $token]);

//        User::firstOrCreate(
//            [
//                'email'=>$data['email']
//            ]
//            ,$data
//        );
//        return response([]);
    }
}
