// src/app/api/check-rtw/route.tsx
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const companyName = process.env.RTW_COMPANY_NAME;
  const allowSponsorship = process.env.RTW_ALLOW_SPONSORSHIP;
  const allowStudent = process.env.RTW_ALLOW_STUDENT;
  
  const shareCode = searchParams.get('share_code');
  const forename = searchParams.get('forename');
  const surname = searchParams.get('surname');
  const dob = searchParams.get('dob');

  const options = {
    method: 'GET',
    url: `https://${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/rtw`,
    params: {
      companyName,
      code: shareCode,
      forename,
      surname,
      dob,
      allowSponsorship,
      allowStudent
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
