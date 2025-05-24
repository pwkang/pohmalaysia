import * as migration_20250524_183543 from './20250524_183543';

export const migrations = [
  {
    up: migration_20250524_183543.up,
    down: migration_20250524_183543.down,
    name: '20250524_183543'
  },
];
