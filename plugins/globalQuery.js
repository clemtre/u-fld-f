// import { gql } from 'graphql-tag'

// function({$graphql}){

//     const query = gql`
//     query homeData {
//       Projets(filter: { featured: { _eq: true } }) {
//         titre
//         id
//         slug
        
        
        
//       }
      
//     }
//     `

// }


// const { global } = $graphql.default.request(query)

export default ( context , inject) => {
    
    inject('global', global)
}


