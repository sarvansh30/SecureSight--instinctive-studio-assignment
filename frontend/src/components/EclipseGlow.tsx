const EllipseGlow = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-42 overflow-hidden -z-10">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-90px]"
        style={{
          width: '1000px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255, 204, 0, 0.15) 0%, rgba(255, 204, 0, 0.05) 50%, transparent 70%)',
          filter: 'blur(1px)'
        }}
      ></div>
    </div>
  );
};

export default EllipseGlow;