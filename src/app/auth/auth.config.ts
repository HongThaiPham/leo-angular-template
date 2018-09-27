import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'VXF15OOFIy7rhoXjaz2fTSdwZVnlpclf',
  CLIENT_DOMAIN: 'leopham.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://leopham.com/roles'
};
