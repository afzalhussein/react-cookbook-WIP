import './info-panel.css';
import { InfoPanel } from './info-panel';

export function ExpandablePanel() {
  return (
    <div className="ExpandablePanel">
      <InfoPanel title="This is an expandable panel">
        <p>This is a component that uses CSS animation to expand and contract this detail panel</p>
      </InfoPanel>
    </div>
  );
}
