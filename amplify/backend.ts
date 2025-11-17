import { defineBackend } from '@aws-amplify/backend';
import { data } from '@aws-amplify/backend-data';

export const backend = defineBackend({
  data: data({
    schema: './amplify/schema.graphql',
    authorizationModes: {
      defaultAuthorizationMode: 'apiKey', // for quick testing
    },
  }),
});
