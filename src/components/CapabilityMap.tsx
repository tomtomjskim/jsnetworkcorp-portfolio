export function CapabilityMap({ capabilities }: { capabilities: string[] }) {
  return (
    <section>
      <h2>Capability map</h2>
      <div className="grid compact">
        {capabilities.map((capability) => (
          <div className="card small" key={capability}>{capability}</div>
        ))}
      </div>
    </section>
  );
}
