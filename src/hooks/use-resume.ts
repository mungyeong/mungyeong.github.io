import { graphql, useStaticQuery } from "gatsby";

const useResume= () => {
  const {dataJson} = useStaticQuery(
    graphql`
      query DataJson {
        dataJson {
          tool
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
            frontend
            etc {
              build
              db
              server
              vcs
            }
            backend
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
