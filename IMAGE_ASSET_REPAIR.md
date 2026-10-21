# Image asset repair

- Added compatibility image files for previously referenced but missing `/images/...` assets.
- Updated `data/overseas/jobs.ts` so the job-category gallery uses all 25 images supplied in `public/photos/`.
- Added missing image aliases using the supplied recruitment photos, with format conversion where needed to match file extensions.
- Static audit: all 181 literal `/images/...` and `/photos/...` references found in source files resolve to files in `public/`.
- The listings are recruitment categories; image presence does not verify that a vacancy is currently open.
