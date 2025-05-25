import * as migration_20250525_032622 from './20250525_032622';

export const migrations = [
  {
    up: migration_20250525_032622.up,
    down: migration_20250525_032622.down,
    name: '20250525_032622'
  },
];
