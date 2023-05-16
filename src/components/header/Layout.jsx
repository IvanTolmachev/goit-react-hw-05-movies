import { List, HeaderTag, NavTag } from './Layout.styled';
import { PageContainer } from 'components/pageContainer/pageContainer';
import { StyledNavLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Main } from 'components/main/Main';

export function Layout() {
  return (
    <>
      <HeaderTag>
        <PageContainer>
          <NavTag>
            <List>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </List>
          </NavTag>
        </PageContainer>
      </HeaderTag>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
