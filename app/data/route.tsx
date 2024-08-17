import { NextResponse } from 'next/server';

var visits = 1;
export async function GET(request: Request) {
  visits++;
  console.log(visits);
  return NextResponse.json({ visits });
}
