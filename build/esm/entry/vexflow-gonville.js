import { Flow } from '../src/flow.js';
import { loadCustom } from '../src/fonts/load_custom.js';
import { loadGonville } from '../src/fonts/load_gonville.js';
import { loadTextFonts } from '../src/fonts/textfonts.js';
loadGonville();
loadCustom();
Flow.setMusicFont('Gonville', 'Custom');
loadTextFonts();
export * from '../src/index.js';
export * as default from '../src/index.js';
