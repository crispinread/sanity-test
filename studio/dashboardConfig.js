export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60a6b22b03ccba00bda74de4',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-wm7f53hv',
                  apiId: '50db8c75-671e-4612-b9b2-532571c6789b'
                },
                {
                  buildHookId: '60a6b22bc6407700e0dfb9fb',
                  title: 'Blog Website',
                  name: 'sanity-test-web-pioqkf48',
                  apiId: 'feb58306-5e35-4ee3-afb8-c0b8f80a7797'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crispinread/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-pioqkf48.netlify.app', category: 'apps'}
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
