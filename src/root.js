import { Outlet, Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

import { link as addKeyboardInteractionLink } from './views/add-keyboard-interaction/route';
import { link as measureTimeWithUseClockLink } from './views/measure-time-with-use-clock/route';
import { link as transitionsWithReactTransitionGroupLink } from './views/transitions-with-react-transition-group/route';
import { link as monitorOnlineStatusLink } from './views/monitor-online-status/route';
import { link as reducerForComplexStateLink } from './views/reducer-for-complex-state/route';
import { link as responsiveRoutesLink } from './views/responsive-routes/route';
import { link as promptForPageExitConfirmationRouteLink } from './views/prompt-for-page-exit-confirmations/route';
import { link as securedRoutesLink } from './views/secured-routes/route';
import { link as stateInRoutesLink } from './views/state-in-routes/route';
import { link as useMarkdownForRichContentLink } from './views/use-markdown-for-rich-content/route';
import { link as animateWithCssClassesLink } from './views/animate-with-css-classes/route';
import { link as convertNetworkCallsToHooksLink } from './views/convert-network-calls-to-hooks/route';
import { link as refreshAutomaticallyWithStateCountersLink } from './views/refresh-automatically-with-state-counters/route';

export const Root = () => {
  const links = [
    responsiveRoutesLink,
    stateInRoutesLink,
    transitionsWithReactTransitionGroupLink,
    promptForPageExitConfirmationRouteLink,
    securedRoutesLink,
    reducerForComplexStateLink,
    measureTimeWithUseClockLink,
    monitorOnlineStatusLink,
    useMarkdownForRichContentLink,
    addKeyboardInteractionLink,
    animateWithCssClassesLink,
    convertNetworkCallsToHooksLink,
    refreshAutomaticallyWithStateCountersLink
  ];

  return (
    <Container>
      <Typography component="h1" variant="h3">
        React cookbook
      </Typography>
      <Box component="nav" sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap' }}>
        {links.map((l) => (
          <Button key={l.link} component={Link} to={l.link} sx={{ textTransform: 'inherit', whiteSpace: 'nowrap' }}>
            {l.text}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Container>
  );
};
