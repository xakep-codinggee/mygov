import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // Validate environment variables
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing Telegram bot token or chat ID');
    return NextResponse.json(
      { success: false, error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const text = `🚨 Reset password Email!\n\n📧 Email: ${email}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      console.error('Telegram API error:', data.description);
      return NextResponse.json(
        { success: false, error: data.description },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send message to Telegram:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}