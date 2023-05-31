import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import { TabPanel } from './components/tab-panel';

// Routing
import { link as responsiveRoutesLink } from './views/responsive-routes/route';
import { link as stateInRoutesLink } from './views/state-in-routes/route';
import { link as promptForPageExitConfirmationRouteLink } from './views/prompt-for-page-exit-confirmations/route';
import { link as transitionsWithReactTransitionGroupLink } from './views/transitions-with-react-transition-group/route';
import { link as securedRoutesLink } from './views/secured-routes/route';

// Managing State
import { link as reducerForComplexStateLink } from './views/reducer-for-complex-state/route';
import { link as measureTimeWithUseClockLink } from './views/measure-time-with-use-clock/route';
import { link as monitorOnlineStatusLink } from './views/monitor-online-status/route';

// Interaction Design
import { link as addKeyboardInteractionLink } from './views/add-keyboard-interaction/route';
import { link as useMarkdownForRichContentLink } from './views/use-markdown-for-rich-content/route';
import { link as animateWithCssClassesLink } from './views/animate-with-css-classes/route';
import { link as centralizedErrorHandlerLink } from './views/centralized-error-handler/route';
import { link as interactiveHelpGuideLink } from './views/interactive-help-guide/route';

// Connecting to Services
import { link as convertNetworkCallsToHooksLink } from './views/convert-network-calls-to-hooks/route';
import { link as refreshAutomaticallyWithStateCountersLink } from './views/refresh-automatically-with-state-counters/route';
import { link as cancelNetworkRequestsWithAxiosTokensLink } from './views/cancel-network-requests-with-axios-tokens/route';
import { link as reduceNetworkLoadWithDebouncedRequestsLink } from './views/reduce-network-load-with-debounced-requests/route';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export const Root = () => {
  const recipeGroups = [
    {
      name: 'Routing',
      links: [
        responsiveRoutesLink,
        stateInRoutesLink,
        promptForPageExitConfirmationRouteLink,
        transitionsWithReactTransitionGroupLink,
        securedRoutesLink
      ]
    },
    {
      name: 'Managing State',
      links: [reducerForComplexStateLink, measureTimeWithUseClockLink, monitorOnlineStatusLink]
    },
    {
      name: 'Interaction Design',
      links: [
        addKeyboardInteractionLink,
        useMarkdownForRichContentLink,
        animateWithCssClassesLink,
        centralizedErrorHandlerLink,
        interactiveHelpGuideLink
      ]
    },
    {
      name: 'Connecting to Services',
      links: [
        convertNetworkCallsToHooksLink,
        refreshAutomaticallyWithStateCountersLink,
        cancelNetworkRequestsWithAxiosTokensLink,
        reduceNetworkLoadWithDebouncedRequestsLink
      ]
    }
  ];

  const [currentTabValue, setCurrentTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTabValue(newValue);
  };

  return (
    <Container>
      <Typography component="h1" variant="h3">
        React cookbook
      </Typography>
      <Tabs value={currentTabValue} onChange={handleTabChange} aria-label="basic tabs example">
        {recipeGroups.map((group, index) => (
          <Tab key={group.name} label={group.name} {...a11yProps(index)} sx={{ textTransform: 'inherit' }} />
        ))}
      </Tabs>

      <TabPanel value={currentTabValue} index={currentTabValue}>
        <Box component="nav" sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap' }}>
          {recipeGroups[currentTabValue].links.map((l) => (
            <Button key={l.link} component={Link} to={l.link} sx={{ textTransform: 'inherit', whiteSpace: 'nowrap' }}>
              {l.text}
            </Button>
          ))}
        </Box>
      </TabPanel>
      <Outlet />
    </Container>
  );
};
