# luxon-round

Adds floor, ceil, and round to multiple of Luxon DateTime units.


## API
Luxon DateTime is extended with:

### DateTime.floor(unit, multiple)
Rounds down to a value less than or equal to the `multiple` of the `unit`.

### DateTime.round(unit, multiple)
Rounds to a value closest to the `multiple` of the `unit`.

### DateTime.ceil(unit, multiple)
Rounds up to a value greater than or equal to the `multiple` of the `unit`.


## Installation
Install via [npm](https://www.npmjs.com/package/@g71/luxon-round)
```bash
$ npm install @g71/luxon-round
```

## Usage
```diff
- import { DateTime } from 'luxon';
+ import { DateTime } from '@g71/luxon-round';
// Use DateTime as normal
```

## Example
```javascript
    import { DateTime } from '@g71/luxon-round';

    const t = DateTime.fromISO("2025-10-03T11:47:11.014+02:00");
    
    // round to closest 15 minutes
    t.round('minute', 15) // "2025-10-03T11:45:00.000+02:00"

    // floor to start of quarter
    t.floor('month', 3) // "2025-09-01T00:00:00.000+02:00"
    
    // ceil to next year (equivalent to DateTime.startOf('year').plus({year: 1});
    t.ceil('year', 1) // "2026-01-01T00:00:00.000+02:00"
```
