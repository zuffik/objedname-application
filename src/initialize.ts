import '@/styles/globals.css';

import { setDefaultOptions } from 'date-fns';
import { cs } from 'date-fns/locale';

setDefaultOptions({
  weekStartsOn: 1,
  locale: cs,
});
