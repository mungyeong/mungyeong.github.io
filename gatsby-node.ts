// import * as path from 'path';
// import {createFilePath} from 'gatsby-source-filesystem';
//
// export async function createPages({graphql, actions, reporter}) {
//   const {createPage} = actions;
//
//   // Define a template for blog post
//   const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
//
//   const result = await graphql(`{
//     allMdx(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
//       nodes {
//         id
//         fields {
//           slug
//         }
//       }
//     }
//   }`,
//   );
//
//   if (result.errors) {
//     reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
//     return;
//   }
//
//   const posts = result.data.allMdx.nodes;
//
//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostId = index === 0 ? null : posts[index - 1].id;
//       const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;
//
//       createPage({
//         path: post.fields.slug,
//         component: blogPost,
//         context: {
//           id: post.id,
//           previousPostId,
//           nextPostId,
//         },
//       });
//     });
//   }
// }
//
// export function onCreateNode({node, actions, getNode}) {
//   const {createNodeField} = actions;
//
//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({node, getNode});
//
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// }
//
//
// export function createSchemaCustomization({actions}) {
//   const {createTypes} = actions;
//
//
//   createTypes(`
//     type SiteSiteMetadata {
//       title: String
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//     type Author {
//       name: String
//       summary: String
//       selfIntroduction: String
//     }
//     type Social {
//       github: String
//       facebook: String
//     }
//     type Markdown implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//       category: String
//     }
//     type Fields {
//       slug: String
//     }
//   `);
// }
