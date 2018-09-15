import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/card.js');
  require('../stories/footer.js');
  require('../stories/header.js');
  require('../stories/main-content.js');
  require('../stories/navigation-menu.js');
  require('../stories/roundicon-button.js');
  require('../stories/popup.js');
  require('../stories/table.js');
}

configure(loadStories, module);