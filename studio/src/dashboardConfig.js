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
                  buildHookId: '602687891c30bfd0b7e21c41',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rve3ehjh',
                  apiId: 'ac815ada-f91a-420d-8927-1d126e58558b'
                },
                {
                  buildHookId: '602687897e097219f83680c7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8yiktr5j',
                  apiId: 'a8e7272d-27c2-457a-862a-3d8f1ddc815e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryanhorner/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8yiktr5j.netlify.app', category: 'apps' }
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
