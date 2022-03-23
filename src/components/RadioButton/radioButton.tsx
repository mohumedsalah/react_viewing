interface IRadioButton {
  onChange: any;
  checked: boolean;
}

function RadioButton(props: IRadioButton) {
  const { checked, onChange } = props;
  return (
    <input
      type="checkbox"
      onChange={(e) => onChange()}
      checked={checked}
      name="radio"
    />
  );
}

export default RadioButton;
