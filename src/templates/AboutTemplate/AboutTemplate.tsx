import React from "react";

import {Layout} from "@/components/Layout";
import {About} from "@/components/About";
import {Sidebar} from "@/components/Sidebar";
import {useResume, useSiteMetadata} from "@/hooks";
import {Resume} from "@/types";

const AboutTemplate = () => {
  const finaltitle = "About me";
  const {title, subtitle} = useSiteMetadata();
  const resume: Resume = useResume();


  return (
    <Layout title={`${finaltitle} - ${title}`} description={subtitle}>
      <Sidebar/>
      <About title={`${finaltitle}`} resume={resume} />
    </Layout>
  );
};

export default AboutTemplate;
