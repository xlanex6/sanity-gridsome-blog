export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e7ba6a97b88217ec91fb317',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4icorg12',
                  apiId: '2763e45e-76a1-4179-9186-d6774fc86afb'
                },
                {
                  buildHookId: '5e7ba6aa1630a96e4f72b17e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-oji3tojh',
                  apiId: '73d475a5-060e-4772-a20d-e6d194fd5b10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xlanex6/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-oji3tojh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
