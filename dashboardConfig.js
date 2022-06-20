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
                  buildHookId: '62ae9cc0aa8c747569b7c8e5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-template-studio',
                  apiId: '1b9b9116-2795-4085-acf5-5122a2a3f906'
                },
                {
                  buildHookId: '62ae9cc0d39be77d9cd49389',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-template',
                  apiId: 'd677f54c-6100-4fc0-8329-69e77490c8f9'
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
