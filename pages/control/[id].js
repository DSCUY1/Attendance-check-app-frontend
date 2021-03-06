import React, { Component } from "react";
import Layout from "../../components/Layout";
import InfoControleurPerso from "../../components/infoControleurPerso";
import axios from "axios";

function analyticPersonnel({ post }) {
  return (
    <>
      <Layout title="Info Surveillant">
        <div className="container-fluid">
          <div className="mainCard">
            <header className="row">
              <div className="col-12 header-card">
                <span>INFORMATIONS</span>
              </div>
            </header>
            <section className="row">
              <div className="col-12 content-card">
                <table
                  id="datatable"
                  className="table dt-responsive nowrap"
                  style={{
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    width: "100%",
                  }}
                >
                  <tbody>
                    {<InfoControleurPerso datas={post} key={post.id} />}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(`users/users/${params.id}`);
    const post = res.data.data;
    return { props: { post } };
  } catch (err) {
    console.log(err);
    return { props: { post: "" } };
  }
}

export async function getStaticPaths() {
  const res = await axios.get(`users/users`);
  const posts = res.data;

  try {
    const paths = posts.map((post) => `/control/${post.id}`);
    return { paths, fallback: false };
  } catch (err) {
    console.log(err);
  }
}
export default analyticPersonnel;
