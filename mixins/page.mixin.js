import { gql } from 'graphql-tag'

const defaultPageData = {
  head() {
    return {
      titre: `${this.projet.titre || ''} - Unexplored Fields`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.projet.description || '',
        },
      ],
    }
  },
}

export const pageMixin = { ...defaultPageData }

export const pageMixinWithData = (pageSlug = '') => {
  return {
    ...defaultPageData,
    async asyncData({ $graphql, params, error }) {
      const query = gql`
        query pagesData($filter: Projets_filter) {
          Projets(filter: $filter) {
            titre
      date
      id
      slug
      corps
      credits
      client {
          nom
        }
      entete {
          id
          filename_disk
      }
      medias {
      item{
        ...on Images {
          ordre
          images{
            directus_files_id{
              filename_disk 

              }
            }            
        }
      }}
            
          }
        }
      `

      const { Projets: projets } = await $graphql.default.request(query, {
        filter: {
          slug: {
            _eq: pageSlug || params.slug,
          },
        },
      })

      if (!projets?.length) {
        return error({ statusCode: 404, message: 'not found' })
      }

      const projet = projets[0]

      return {
        projet: {
          ...projet,
          content: projet.content ? createHTML(projet.content) : '',
        },
      }
    },
  }
}