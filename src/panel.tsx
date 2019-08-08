import React, {useState} from 'react';

type PanelProps = {
  header: string,
  content: string,
  onToggle: (showBody: boolean) => void
}

export default function Panel({header, content, onToggle}: PanelProps) {
  const [showBody, setShowBody] = useState(true);

  function toggle() {
    const newValue = !showBody;
    setShowBody(newValue);
    onToggle(newValue);
  }

  return <div className="panel" title='click to collapse or expand'>
    <div className="header" onClick={toggle}>{header}</div>
    {showBody && <div className="body">{content}</div>}
  </div>;
};
