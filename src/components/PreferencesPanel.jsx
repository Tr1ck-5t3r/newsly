export default function PreferencesPanel({ preferences, onChange }) {
  const update = (key, value) => {
    onChange({ ...preferences, [key]: Number(value) });
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
      <h2 className="font-semibold mb-3">Your Preferences</h2>

      {Object.entries(preferences).map(([key, value]) => (
        <div key={key} className="flex items-center gap-4 mb-3">
          <label className="w-24 capitalize">{key}</label>

          <input
            type="range"
            min="0"
            max="5"
            value={value}
            onChange={(e) => update(key, e.target.value)}
            className="flex-1"
          />

          <span className="w-6 text-right">{value}</span>
        </div>
      ))}
    </div>
  );
}
