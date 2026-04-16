export default function WaveDivider({ topColor, bottomColor, flip = false }) {
  const path = flip
    ? 'M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z'
    : 'M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z'

  return (
    <div className="wave-divider" style={{ background: topColor }}>
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill={bottomColor} />
      </svg>
    </div>
  )
}
