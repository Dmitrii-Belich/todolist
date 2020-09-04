import React from "react";
import "./Popup.scss";

export default function Popup({ isActive, onSubmit, colors, onPopupClose }) {
  const [selectedColor, setSelectedColor] = React.useState(1);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit(inputValue, selectedColor);
        setTimeout(() => {
          setInputValue("");
          setSelectedColor(1);
        }, 200);
      }}
      className={`popup ${isActive && "popup_type_visible"}`}
      noValidate
    >
      <input
        className="popup__input"
        type="text"
        placeholder="Название папки"
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        required
        value={inputValue}
      ></input>
      <div className="popup__checkboxes">
        {colors.map((color) => {
          return (
            <i
              key={color.id}
              className={`popup__radiobox ${
                color.id === selectedColor && "popup__radiobox_type_active"
              }`}
              onClick={() => {
                setSelectedColor(color.id);
              }}
              style={{ backgroundColor: color.hex }}
            ></i>
          );
        })}
      </div>
      <button
        type="submit"
        className={`popup__submit ${
          !inputValue && "popup__submit_type_disabled"
        }`}
        disabled={!inputValue && "disabled"}
      >
        Добавить
      </button>
      <button
        type="button"
        className="popup__exit"
        onClick={() => {
          onPopupClose();
          setTimeout(() => {
            setInputValue("");
            setSelectedColor(1);
          }, 200);
        }}
      ></button>
    </form>
  );
}
