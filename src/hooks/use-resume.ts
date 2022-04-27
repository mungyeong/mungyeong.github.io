import { graphql, useStaticQuery } from "gatsby";

const useResume= () => {
  const {dataJson} = useStaticQuery(
    graphql`
      query DataJson {
        dataJson {
          tool {
            name
            color
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
              color
            }
            frontend {
              name
              color
            }
            etc {
              build {
                name
                color
              }
              db {
                name
                color
              }
              server {
                name
                color
              }
              vcs {
                name
                color
              }
            }
            backend {
              name
              color
            }
          }
        }
      }
    `,
  );

  return dataJson;
};

export default useResume;
