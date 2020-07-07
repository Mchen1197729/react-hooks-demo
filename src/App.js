import React from "react"
import loadable from '@loadable/component'
/* eslint-disable */
import DemoNested from './Demo/react-router-dom/demos/DemoNested'
import DemoBasic from './Demo/react-router-dom/demos/DemoBasic'
import DemoUseParams from './Demo/react-router-dom/hooks/DemoUseParams'
import DemoUseRouteMatch from './Demo/react-router-dom/hooks/DemoUseRouteMatch'
import DemoRedirect from './Demo/react-router-dom/demos/DemoRedirect'
import DemoAuth from './Demo/react-router-dom/demos/DemoAuth'
import DemoUseLocation from './Demo/react-router-dom/hooks/DemoUseLocation'
import DemoUseHistory from './Demo/react-router-dom/hooks/DemoUseHistory'
import CustomLinkExample from './Demo/react-router-dom/demos/CustomLinkExample'
import DemoConfigRoutes from './Demo/react-router-dom/demos/DemoConfigRoutes'
import DemoConfigRoutesTest from './Demo/react-router-dom/demos/DemoConfigRoutesTest'
import DemoPreventLeaving from './Demo/react-router-dom/demos/DemoPreventLeaving'
// import DemoCustomRouterHook from './Demo/react-router-dom/demos/DemoCustomRouterHook'
const DemoCustomRouterHook = loadable(() => import('./Demo/react-router-dom/demos/DemoCustomRouterHook'))

import DemoUseState from './Demo/react/hooks/DemoUseState'
import DemoUseEffect from './Demo/react/hooks/DemoUseEffect'
import DemoUseEffect2 from './Demo/react/hooks/DemoUseEffect2'
import DemoUseEffect3 from './Demo/react/hooks/DemoUseEffect3'
import DemoUseReducer from './Demo/react/hooks/DemoUseReducer'
import DemoUseRef from './Demo/react/hooks/DemoUseRef'
import DemoCustomHook from './Demo/react/hooks/DemoCustomHook'
import DemoPrevState from './Demo/react/hooks/DemoPrevState'
import DemoUseCallback from './Demo/react/hooks/DemoUseCallback'
import DemoLazyUseState from './Demo/react/hooks/DemoLazyUseState'
import DemoUseContext from './Demo/react/hooks/DemoUseContext'

import Demo01 from './Demo/both/Demo01'

import DemoDebounceInput from './Demo/debounce/DemoDebounceInput'
import DemoDebounceInput2 from './Demo/debounce/DemoDebounceInput2'
import DemoDebounceInput3 from './Demo/debounce/DemoDebounceInput3'

import DemoHighlight from './Demo/hightlight/DemoHighlight'

import DemoCountUp from './Demo/countup/DemoCountUp'

import ShouldSuper from './Demo/shouldUpdate/ShouldSuper'
import ShouldSuperClass from './Demo/shouldUpdate/ShouldSuperClass'

/*eslint-enable*/
export default function App() {
  return (
      <DemoUseRef/>
  )
}
