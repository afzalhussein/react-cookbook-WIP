import { useEffect, useState } from 'react';

import { HelpBubble } from './help-bubble';

function isVisible(e) {
  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}

export const HelpSequence = ({ open, sequence, onClose }) => {
  const [position, setPosition] = useState(0);
  const [filteredSequence, setFilteredSequence] = useState();

  useEffect(() => {
    if (sequence) {
      const filter = sequence.filter((i) => {
        if (!i.forElement) {
          return false;
        }
        const element = document.querySelector(i.forElement);
        if (!element) {
          return false;
        }
        return isVisible(element);
      });
      setFilteredSequence(filter);
    } else {
      setFilteredSequence(null);
    }
  }, [sequence, open]);

  const data = filteredSequence && filteredSequence[position];

  useEffect(() => {
    setPosition(0);
  }, [open]);

  const onNext = () =>
    setPosition((p) => {
      if (p === filteredSequence.length - 1) {
        onClose && onClose();
      }
      return p + 1;
    });

  const onPrevious = () =>
    setPosition((p) => {
      if (p === 0) {
        onClose && onClose();
      }
      return p - 1;
    });

  return (
    <div className="HelpSequence-container">
      {data && (
        <HelpBubble
          open={open}
          forElement={data.forElement}
          placement={data.placement}
          onClose={onClose}
          previousLabel={position > 0 && 'Previous'}
          nextLabel={position < filteredSequence.length - 1 ? 'Next' : 'Finish'}
          onPrevious={onPrevious}
          onNext={onNext}
          content={data.text}
        />
      )}
    </div>
  );
};
