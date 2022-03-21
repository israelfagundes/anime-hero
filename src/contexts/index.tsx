import { PropsWithRequiredChildren } from '../common/types';
import { ThemeProvider } from './theme';

function AppProviders({ children }: PropsWithRequiredChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppProviders;
