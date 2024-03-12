// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InTheCardsCharacter } = initSchema(schema);

export {
  InTheCardsCharacter
};