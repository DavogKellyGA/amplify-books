// amplify/data/resource.ts
import { a, defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: a.schema({
    Book: a
      .model({
        id: a.id(),                 // primary key
        title: a.string().required(),
        author: a.string().required(),
        year: a.integer(),          // optional
      })
      .authorization((allow) => [
        allow.publicApiKey(),       // quick testing (switch to Cognito later)
      ]),
  }),
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
  },
});
