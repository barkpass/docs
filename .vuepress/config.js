const fs = require('fs');
const path = require('path');
const guides = fs.readdirSync(path.join(__dirname, '..', 'guides'))
  .filter(f => f.endsWith('.md'));

module.exports = {
  title: 'Docs',

  head: [
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,900&display=swap",
        rel: "stylesheet",
        type: "text/css"
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        children: prefix('guides', ["faq", "changelog"])
      },
      {
        title: "Applications",
        collapsable: false,
        children: prefix('guides', [
          'approve-an-application',
          'reject-request-changes-to-an-application',
          'process-in-person-applications',
          'handling-outstanding-balances',
          'generate-an-invoice-for-an-outstanding-balance',
          'marking-an-application-as-inactive',
          'view-passes'
        ])
      },
      {
        title: "Day Passes",
        collapsable: false,
        children: prefix('guides', [
          'manage-day-pass-purchases'
        ])
      },
      {
        title: "Messages",
        collapsable: false,
        children: prefix('guides', [
          'message-permit-holders'
        ])
      },
      {
        title: "Cities",
        collapsable: false,
        children: prefix('guides', [
          'attach-new-administrator-to-a-city',
          'update-basic-city-information'
        ])
      },
      {
        title: "Pets",
        collapsable: false,
        children: prefix('guides', [
          'manage-pets',
        ])
      },
      // ...guides.map(g => `/guides/${g.replace('.md', '')}`)
    ]
  }
}

function prefix(p, items) {
  return items.map(item => `${p}/${item}`);
}
