import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');
    
    // Protect the endpoint with a secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid secret token' }, 
        { status: 401 }
      );
    }

    // Revalidate all blog pages for both locales
    revalidatePath('/[locale]/blog', 'page');
    revalidatePath('/[locale]/blog/[slug]', 'page');
    revalidatePath('/[locale]/archive', 'page');
    
    // Also clear the in-memory cache if needed
    // The cache in getcachedposts.ts will be automatically cleared on next fetch
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      message: 'Blog cache cleared successfully'
    });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json(
      { error: 'Error revalidating cache' }, 
      { status: 500 }
    );
  }
}

// Also support GET for easy testing in browser
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret token' }, 
      { status: 401 }
    );
  }

  return NextResponse.json({ 
    message: 'Use POST method to revalidate',
    endpoint: '/api/revalidate?secret=YOUR_SECRET',
  });
}

