import { useCustomCursor } from '../hooks/useCustomCursor'

export default function CustomCursor() {
  const cursorRef = useCustomCursor()

  return <div className="custom-cursor" ref={cursorRef} />
}

