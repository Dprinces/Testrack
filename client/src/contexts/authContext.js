import { createContext } from 'react';

// Export the AuthContext separately to avoid non-component exports
// in component files and satisfy fast-refresh linting rules.
export const AuthContext = createContext();