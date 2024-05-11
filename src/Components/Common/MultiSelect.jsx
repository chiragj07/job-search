import { useEffect, useRef, useState, memo } from "react"
import "./styles.css";


function MultiSelect({ placeholder, multiple, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef(null)

  function clearOptions() {
    multiple ? onChange([]) : onChange("")
  }

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  
  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
      className={"container"}
    >
      <span className={"value"}>
        {value.length === 0 && <div className="placeholder">{placeholder} </div>}
        { value && (multiple
          ? value.map(v => (
              <button
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={"option-badge"}
              >
                {v.label}
                <span className={"remove-btn"}>&times;</span>
              </button>
            ))
          : value?.label)}
      </span>
      <button
        onClick={e => {
          e.stopPropagation()
          clearOptions()
        }}
        className={"clear-btn"}
      >
        &times;
      </button>
      <div className={"divider"}></div>
      <div className={"caret"}></div>
      <ul className={`options ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`option ${
              isOptionSelected(option) ? "selected" : ""
            } ${index === highlightedIndex ? "highlighted" : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default memo(MultiSelect);