import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  { text: "React Three Fiber Demo 1", url: "r3f-1" },
  { text: "React Three Fiber Demo 2", url: "r3f-2" }
]

const IndexPage = () => (
  <Layout>
    <p className={styles.intro}>
      <b>Example pages:</b>{" "}
      {samplePageLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <Link to={link.url}>{link.text}</Link>
          {i !== samplePageLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
      <br />
      Edit <code>src/pages/index.js</code> to update this page.
    </p>
  </Layout>
)

export default IndexPage
