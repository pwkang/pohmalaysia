import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const headers = request.headers;

  const authorization = headers.get('authorization');

  if (authorization !== process.env.STRAPI_WEBHOOK_SECRET) {
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }

  if (data.event !== 'entry.publish')
    return NextResponse.json({ revalidated: false, now: Date.now() });

  const paths = [];

  switch (data.model) {
    case 'gallery':
      paths.push(`/gallery`);
      paths.push(`/gallery/${data.entry.slug}`);
      break;
    case 'bod-page':
      paths.push(`/committee/${data.entry.slug}`);
      break;
  }

  for (const path of paths) {
    await revalidatePath(path);
    console.log(`Revalidated ${path}`);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
