export default function ModuleBackground({
  children,
  type = "default",
}) {
  return (
    <div className={`module-background module-${type}`}>
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <div className="background-content">
        {children}
      </div>
    </div>
  );
}