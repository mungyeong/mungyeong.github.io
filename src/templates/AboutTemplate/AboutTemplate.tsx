import React from "react";

import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import {useResume, useSiteMetadata} from "@/hooks";
import {Resume} from "@/types";

interface Props {
  data: {
    datajson: Resume;
  };
}

const AboutTemplate: React.FC<Props> = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const resume: Resume  = useResume();
  const title: string = "About me";
  const metaDescription: string = "About me";

  return (
          <Layout
                  title={`${title} - ${siteTitle}`}
                  description={metaDescription}
                  socialImage={socialImage}
          >
            <Sidebar />
            <Page title={title}>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </Page>
          </Layout>
  );
};

export default AboutTemplate;
