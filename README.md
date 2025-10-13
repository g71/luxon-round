# luxon-round

Add floor, ceil, and round to multiple of Luxon DateTime units.

```diff
- import { DateTime } from 'luxon';
+ import { DateTime } from '@g71/luxon-round';
// Use DateTime as normal
```
    const dt = DateTime.fromISO("2025-10-03T11:47:11.014+02:00");
    
    // round to closest 15 minutes
    dt.round('minute', 15) // "2025-10-03T11:45:00.000+02:00"
    
    // floor to start of quarter
    dt.floor('month', 3) // "2025-09-01T00:00:00.000+02:00"
    
    // ceil to next year (equivalent to DateTime.startOf('year').plus({year: 1});
    dt.ceil('year', 1) // "2026-01-01T00:00:00.000+02:00"
