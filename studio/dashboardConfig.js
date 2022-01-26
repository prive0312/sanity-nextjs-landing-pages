export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f1c2ee2872ea4cd27af160',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s8xigxjd',
                  apiId: '614b9288-4ba3-4441-8bc8-adfb24af4221'
                },
                {
                  buildHookId: '61f1c2ee03726a48f6b39f9a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ji3igr4b',
                  apiId: '2295b46a-a35f-4f88-9e7f-d3463461572b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prive0312/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ji3igr4b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
