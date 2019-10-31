const fs = require('fs');
const path = require('path');
const guides = fs.readdirSync(path.join(__dirname, '..', 'guides'))
  .filter(f => f.endsWith('.md'));

module.exports = {
  title: 'Barkpass Docs',
  head: [
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  ],
  themeConfig: {
    sidebar: [
      ...guides.map(g => `/guides/${g.replace('.md', '')}`)
    ]
  }
}
