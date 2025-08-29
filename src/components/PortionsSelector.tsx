import { useState } from "react";
import { portionQtyButton } from "../styles/classNames";

function PortionsSelector({ min = 0, max = 100, step = 1, initial = 4 }) {
  const [value, setValue] = useState(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= min && val <= max) {
      setValue(val);
    }
  };

  const updateValue = (delta: number) => {
    setValue((prev) => Math.max(min, Math.min(max, prev + delta)));
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => updateValue(-step)}
        disabled={value <= min}
        className={portionQtyButton}
        aria-label="Decrease portions"
      >
        –
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        className="w-16 h-10 text-center border-2 border-yellow-200 rounded-lg font-semibold text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        required
        aria-label="Portion count"
      />
      <button
        type="button"
        onClick={() => updateValue(step)}
        disabled={value >= max}
        className={portionQtyButton}
        aria-label="Increase portions"
      >
        +
      </button>
    </div>
  );
}

export default PortionsSelector;
