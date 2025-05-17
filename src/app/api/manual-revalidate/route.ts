import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const headers = request.headers;

  const authorization = headers.get('authorization');

  if (authorization !== process.env.MANUAL_REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }

  const paths = data.paths;

  for (const path of paths) {
    await revalidatePath(path);
    console.log(`Revalidated ${path}`);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}