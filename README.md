# luxon-round

Add floor, ceil, and round to multiple of Luxon DateTime units.

    import { DateTime } from 'luxon';
    import '@g71/luxon-round';

    // round to closest 15 minutes
    DateTime.fromISO("2025-10-03T11:47:11.014+02:00").round('minute', 15) // "2025-10-03T11:45:00.000+02:00"

    // floor to start of quarter
    DateTime.fromISO("2025-08-03T16:59:12.014+02:00").floor('month', 3) // "2025-06-01T00:00:00.000+02:00"
    
    // ceil to next year (equivalent to DateTime.startOf('year').plus({year: 1});
    DateTime.fromISO("2025-08-03T16:59:12.014+02:00").ceil('year', 1) // "2026-01-01T00:00:00.000+02:00"
