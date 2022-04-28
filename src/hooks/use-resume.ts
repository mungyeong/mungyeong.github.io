import { graphql, useStaticQuery } from "gatsby";

const useResume= () => {
  const {dataJson} = useStaticQuery(
    graphql`
      query DataJson {
        dataJson {
          tool {
            name
          }
          experience {
            project {
              name
              role
              time
              desc
            }
            work {
              company
              department
              time
            }
          }
          skill {
            language {
              name
              level
            }
            frontend {
              name
            }
            etc {
              build {
                name
              }
              db {
                name
              }
              server {
                name
              }
              vcs {
                name
              }
            }
            backend {
              name
            }
          }
          certificate {
            name
            date
          }
        }
      }
    `,
  );

  return dataJson;
};

export default useResume;
