export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62b10f57aa8c742f4eb7c8ae',
                  title: 'Sanity Studio',
                  name: 'page-builder-cms',
                  apiId: 'd9cd68e7-fe04-4894-98e6-39e6ddd71021'
                },
                {
                  buildHookId: '62b10fe6b37d4a3af699cd3e',
                  title: 'Landing pages Website',
                  name: 'headless-landing-page',
                  apiId: 'fe849295-d763-421b-8205-047a1b96c519'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bitwhys/sanity-nextjs-landing-pages-template',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-template.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
