import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = 'WaveCode — Software development studio in Puerto Rico'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const barHeights = [72, 144, 216, 264, 168, 96]
const litBarIndex = 3

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0a0a0a',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {barHeights.map((height, index) => (
            <div
              key={index}
              style={{
                width: 24,
                height,
                borderRadius: 12,
                background: index === litBarIndex ? '#FFB627' : '#F2F4F8',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: '#aaaaaa' }}>
            Software built with intention. Independent studio in Puerto Rico.
          </div>
        </div>
      </div>
    ),
    size
  )
}
