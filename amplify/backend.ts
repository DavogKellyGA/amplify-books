// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource.ts';

export const backend = defineBackend({
  data,
});

