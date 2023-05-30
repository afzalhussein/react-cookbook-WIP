import { ErrorContainer } from './error-container';
import { ClockIn } from './clock-in';

export function Page() {
  return (
    <div className="Page">
      <ErrorContainer>
        <ClockIn />
      </ErrorContainer>
    </div>
  );
}
