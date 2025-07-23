
const EllipseGlow = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0">
        {/* Main ellipse glow */}
        <div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2"
          style={{
            width: '900px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255, 204, 0, 0.15) 0%, rgba(255, 204, 0, 0.05) 40%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        ></div>
        {/* Inner ellipse for more defined glow */}
        <div 
          className="absolute top-12 left-1/2 transform -translate-x-1/2"
          style={{
            width: '700px',
            height: '140px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255, 204, 0, 0.08) 0%, transparent 60%)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default EllipseGlow;