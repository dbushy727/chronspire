<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use App\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function create(Request $request)
    {
        try {
            Subscriber::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
            ]);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }

        return ['success' => 'subscriber saved'];
    }

    public function contact(Request $request)
    {
        $message = new ContactMessage($request->get('name'), $request->get('email'), $request->get('message'));

        \Mail::to('d.bushkanets@gmail.com')->send($message);

        if ($request->get('subscribe')) {
            $this->create($request);
        }

        return ['success' => 'email sent'];
    }
}
