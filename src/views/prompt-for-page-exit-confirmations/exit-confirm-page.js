import { useEffect, useState } from 'react';
import ReactRouterPrompt from 'react-router-prompt';
import { Alert } from './alert';

export const ExitConfirmPage = () => {
  let initialValue = 'Initial value';

  const [data, setData] = useState(initialValue);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data !== initialValue) {
      setDirty(true);
    }
  }, [data, initialValue]);

  return (
    <div className="Important">
      <textarea onChange={(evt) => setData(evt.target.value)} cols={40} rows={12}>
        {data}
      </textarea>
      <br />
      <button onClick={() => setDirty(false)} disabled={!dirty}>
        Save
      </button>
      <ReactRouterPrompt when={dirty} beforeConfirm={() => {}} beforeCancel={() => {}}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && (
            <Alert
              open={isActive}
              title="Leave page?"
              message="Confirm message."
              onOK={onConfirm}
              onCancel={onCancel}
            />
          )
        }
      </ReactRouterPrompt>
    </div>
  );
};
