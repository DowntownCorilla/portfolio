import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Resend 클라이언트 초기화
const resend = new Resend(process.env.RESEND_API_KEY);

// POST 요청 핸들러 - 연락처 폼 데이터를 받아서 이메일로 전송
export async function POST(request: Request) {
  try {
    // 요청 본문 파싱
    const { fullName, email, message } = await request.json();

    // 입력 검증
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 주소 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 전송
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend 테스트 주소 (나중에 도메인 인증 후 변경 가능)
      to: [process.env.CONTACT_EMAIL!], // 받을 이메일 주소 (.env.local에 설정한 값)
      replyTo: email, // 답장 주소를 보낸 사람 이메일로 설정
      subject: `Portfolio 문의: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">
            새로운 포트폴리오 문의
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">이름:</strong> 
              <span style="color: #333;">${fullName}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #555;">이메일:</strong> 
              <span style="color: #333;">${email}</span>
            </p>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
              <strong style="color: #555;">메시지:</strong>
              <p style="color: #333; white-space: pre-wrap; margin-top: 10px;">${message}</p>
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #888; font-size: 12px;">
            이 이메일은 포트폴리오 웹사이트의 연락 폼을 통해 자동으로 전송되었습니다.
          </p>
        </div>
      `,
    });

    console.log('이메일 전송 성공:', data);

    return NextResponse.json(
      { success: true, message: '이메일이 성공적으로 전송되었습니다.', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    
    return NextResponse.json(
      { 
        error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}


