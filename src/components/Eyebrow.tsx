type EyebrowProps = {
  children: string
  light?: boolean
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div className={light ? 'eyebrow eyebrow--light' : 'eyebrow'}>
      <span />
      {children}
    </div>
  )
}
