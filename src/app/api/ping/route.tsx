// 웹: 약속

import { NextResponse, type NextRequest } from "next/server";

// 서버 개발: 요청을 받아서 응답을 리턴하는 함수
// (/api/ping (GET))
export async function GET(request: NextRequest) {
  console.log("/api/ping GET 실행");
  const url = new URL(request.url);
  console.log("URL", url);
  console.log("headers:", request.headers);
  // ---- response
  const respHeaders = new Headers();
  respHeaders.set("pingHeader", "pongHeader");

  const response = NextResponse.json(
    {
      ping: "pong",
    },
    { headers: respHeaders },
  );
  response.cookies.set("sample-cookie", "sample-value");
  return response;
}

export async function POST(request: NextRequest) {
  console.log("/api/ping POST 실행");

  // json형태의 request.body parsing
  const body = await request.json();
  console.log(body);
  const response = NextResponse.json({
    ping: "POST-pong",
  });
  return response;
}
