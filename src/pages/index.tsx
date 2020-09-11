import React from 'react';
// import { Link } from "gatsby"
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      image2: file(relativePath: { eq: "brianmei.jpeg" }) {
        ...getFluidImage
      }
    }
  `);
  return (
    <Layout>
      <Container>
        <h1>テスト</h1>
        <Img fluid={images.image2.childImageSharp.fluid} />
      </Container>
    </Layout>
  );
};
export default IndexPage;

export const getFluidImage = graphql`
  fragment getFluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 1000px;
`;
