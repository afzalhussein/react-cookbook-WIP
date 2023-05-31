import { Popper, Button } from '@mui/material';
import './help-bubble.css';

export const HelpBubble = ({
  open,
  forElement,
  placement,
  content,
  previousLabel,
  onPrevious,
  nextLabel,
  onNext,
  onClose
}) => {
  const element = forElement ? document.querySelector(forElement) : null;

  return element ? (
    <Popper className="HelpBubble-container" open={open} anchorEl={element} placement={placement || 'bottom-start'}>
      <div className="HelpBubble-close">
        <Button onClick={onClose}>Close [X]</Button>
      </div>
      {content}
      <div className="HelpBubble-controls">
        {previousLabel ? (
          <Button className="HelpBubble-control HelpBubble-previous" onClick={onPrevious}>
            &lt; {previousLabel}
          </Button>
        ) : (
          <div>&nbsp;</div>
        )}
        {nextLabel ? (
          <Button className="HelpBubble-control HelpBubble-next" onClick={onNext}>
            {nextLabel} &gt;
          </Button>
        ) : (
          <div>&nbsp;</div>
        )}
      </div>
    </Popper>
  ) : null;
};
