import { RouterContext } from 'next/dist/shared/lib/router-context';

export const createRouterWrapper =
  (router) =>
  ({ children }) =>
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
