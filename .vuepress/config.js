const fs = require('fs');
const path = require('path');
const guides = fs.readdirSync(path.join(__dirname, '..', 'guides'))
  .filter(f => f.endsWith('.md'));

module.exports = {
  title: 'Barkpass Docs',
  themeConfig: {
    sidebar: [
      ...guides.map(g => `/guides/${g.replace('.md', '')}`)
    ]
  }
}
