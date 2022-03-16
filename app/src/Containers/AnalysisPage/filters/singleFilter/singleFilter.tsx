import { useEffect } from "react";

interface selectProps {
  items: string[];
  onChange: any;
  label: string;
}

function SingleFilter(props: selectProps) {
  const { items, onChange, label } = props;

  useEffect(() => {
    onChange(items[0] || "");
  }, [items, onChange]);

  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(el) => onChange(el.target.value)}
        name={label}
        id={label}
      >
        {items.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SingleFilter;
