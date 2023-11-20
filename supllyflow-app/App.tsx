import { AuthProvider } from './src/contexts/AuthContext';
import Navigation from './src/router/stack';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
  
}
