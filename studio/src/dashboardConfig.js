export default {
  widgets: [
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
                  buildHookId: '5ffa889693ca4a2fb065311c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1bezhkb3',
                  apiId: '40d0f395-f819-4825-9b3c-0241ec97cb8a'
                },
                {
                  buildHookId: '5ffa8896349da748e21cff23',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-whes4ku9',
                  apiId: '52aedaeb-1140-4fb4-8792-18531aaed959'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AntonBrito/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-whes4ku9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
