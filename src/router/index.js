import Discover from '@/pages/discover';
import Mine from '@/pages/mine';
import Friend from '@/pages/friend';

const routes = [
  { 
    path: "/",
    element: <Discover /> 
  }, {
    path: "/mine",
    element: <Mine />
  }, {
    path: "/friend",
    element: <Friend />
  },
];

export default routes;