import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const themes = [
  { id: 'crimson',  label: 'Crimson',  color: '#ff6b6b' },
  { id: 'ocean',    label: 'Ocean',    color: '#00d4ff' },
  { id: 'rose',     label: 'Rose',     color: '#f472b6' },
  { id: 'emerald',  label: 'Emerald',  color: '#34d399' },
]

function ThemeSwitcher({ current, onChange }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 999 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '60px',
              right: 0,
              background: 'rgba(20, 20, 40, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minWidth: '140px'
            }}
          >
            {themes.map(t => (
              <motion.button
                key={t.id}
                onClick={() => { onChange(t.id); setOpen(false) }}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: current === t.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: current === t.id ? `1px solid ${t.color}60` : '1px solid transparent',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: current === t.id ? '700' : '400',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  width: '16px', height: '16px',
                  borderRadius: '50%',
                  background: t.color,
                  boxShadow: `0 0 8px ${t.color}`,
                  flexShrink: 0
                }} />
                {t.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '46px', height: '46px',
          borderRadius: '50%',
          background: 'rgba(20,20,40,0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.15)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
        }}
      >
        🎨
      </motion.button>
    </div>
  )
}

export default ThemeSwitcher
