import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import ProviderMenu from "../../components/Layout/ProviderMenu";

const ProviderDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="row-md-3">
            <ProviderMenu />
          </div>
          <div className="row-md-9">
            <div className="card w-75 p-3">
              <h4>Provider Name:{auth?.user?.name}</h4>
              <h4>Provider Email :{auth?.user?.email}</h4>
              <h4>Provider Contact : {auth?.user?.phone}</h4>
              <h4>Provider Ratings : {auth?.user?.finalrating}</h4>
              {auth?.user?.timings ? (
                <h4>
                  {" "}
                  Provider Timings : {auth?.user?.timings[0]} -{" "}
                  {auth?.user?.timings[1]}
                </h4>
              ) : (
                <h4>Please Set Your Timings </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProviderDashboard;
