import { STORAGE_KEY } from '../constants';

export const composeStorageKey = (key: string) => `${STORAGE_KEY}:${key}`;
