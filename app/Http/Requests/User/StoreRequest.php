<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Обязательно для заполнения',
            'name.string' => 'Допустимы только символы',
            'email.required' => 'Обязательно для заполнения',
            'email.email' => 'Не верный формат e-mail',
            'password.required' => 'Обязательно для заполнения',
            'password.string' => 'Допустимы только символы',
            'password.confirmed' => 'Пароли не совпадают',
            'password_confirmation.required' => 'Обязательно для заполнения',
            'password_confirmation.string' => 'Допустимы только символы',
        ];
    }
}
