// amplify/data/resource.ts
import { a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Book: a
    .model({
      id: a.id(),                 // primary key
      title: a.string().required(),
      author: a.string().required(),
      year: a.integer(),          // optional
    })
    .authorization((allow) => [
      allow.publicApiKey(),       // quick testing (you can switch to Cognito later)
    ]),
});

export default defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
  },
});
