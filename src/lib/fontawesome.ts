// Font Awesome core config. We import the library's CSS ourselves (in the Astro
// layout) so the icons are sized correctly during SSR; disable the runtime
// auto-injection to avoid a flash of oversized icons before hydration.
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
