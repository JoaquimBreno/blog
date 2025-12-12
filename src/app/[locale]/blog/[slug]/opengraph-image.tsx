import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Joaquim Breno Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 20, color: '#666' }}>
          Joaquim Breno Blog
        </div>
        <div style={{ fontSize: 72, fontWeight: 'bold', color: '#000', lineHeight: 1.2 }}>
          {slug.replace(/-/g, ' ')}
        </div>
        <div style={{ fontSize: 40, color: '#999', marginTop: 30 }}>
          {locale === 'pt' ? 'Leia mais em' : 'Read more at'} joaquimbreno.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


