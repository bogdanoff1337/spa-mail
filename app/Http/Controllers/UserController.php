<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request) : RedirectResponse
{
    $request->validate([
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6',
    ]);

    $user = new User();
    $user->name = $request->input('name');
    $user->email = $request->input('email');
    $user->password = Hash::make($request->input('password'));
    $user->save();

    
    Auth::login($user);

    return redirect()->intended('/');
}

public function login(Request $request) :  RedirectResponse
{
    // Validate the user credentials
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:6',
    ]);

    // Attempt to login the user
    if (Auth::attempt($request->only('email', 'password'))) {
        // Login successful
        return redirect()->intended('/');
    }

    // Login failed
    return redirect()->back()->with('error', 'Invalid credentials.');
}


public function logout()
{
    Auth::logout(); 
    return redirect('/'); 
}

}
