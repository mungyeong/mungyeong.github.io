import React from "react";

import {Layout} from "@/components/Layout";
import {Page} from "@/components/Page";
import {Sidebar} from "@/components/Sidebar";
import {/*useResume,*/ useSiteMetadata} from "@/hooks";
// import {Resume} from "@/types";

const AboutTemplate: React.FC = () => {
  const {title, subtitle} = useSiteMetadata();
  // const resume: Resume = useResume();


  return (
    <Layout title={`About me - ${title}`} description={subtitle}>
      <Sidebar/>
      <Page title="About me">

      </Page>
    </Layout>
  );
};

export default AboutTemplate;
