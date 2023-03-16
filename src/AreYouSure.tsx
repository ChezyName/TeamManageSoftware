import React from 'react'

const AreYouSure = () => {
  return (
    <div className="root" style={{display: 'block', position: 'fixed', backgroundColor: 'rgba(25,25,25,0.95)'}}>
        <div style={{width: '100%', top: '50%'}}>
            <span style={{color: 'white'}}>Reset All Data?</span>
        </div>
    </div>
  )
}

export default AreYouSure