import { NextRequest } from "next/server";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.nextUrl); 
    const mySearchParam = searchParams.get('mySearchParam');
    console.log('GET');

    return new Response(JSON.stringify({ message: 'Hello World' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function POST(req: NextRequest) {
    console.log('POST');

    const body = await req.json();

    return new Response('OK');
}