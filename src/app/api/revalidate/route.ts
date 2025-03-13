import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (data.event !== 'entry.publish')
    return NextResponse.json({ revalidated: false, now: Date.now() });

  const paths = [];

  switch (data.model) {
    case 'gallery':
      paths.push(`/gallery/${data.entry.slug}`);
      break;
    case 'bod-page':
      paths.push(`/committee/${data.entry.slug}`);
      break;
  }

  for (const path of paths) {
    await revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
