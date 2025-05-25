import * as migration_20250525_033621 from './20250525_033621';

export const migrations = [
  {
    up: migration_20250525_033621.up,
    down: migration_20250525_033621.down,
    name: '20250525_033621'
  },
];
