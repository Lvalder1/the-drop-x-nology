import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styles from "./Routes.module.scss";
import Dashboard from "../containers/Main/Artist/Dashboard";
import NotFound from "../components/Navbar/NotFound";
import ArtistBio from "../components/Main/Artist/ArtistBio";
// import DraftReleases from "../components/Main/Artist/DraftReleases";
import ReleaseArchive from "../components/Main/Artist/ReleaseArchive";
import ManageReleases from "../components/Main/Artist/ManageReleases";
import PreviewRelease from "../components/Main/Artist/ManageReleases/PreviewReleases";

export default class FanRoutes extends Component {
    render() {
        return (
            <Router className={styles.Router}>
                <Redirect noThrow from="/" to="dashboard" />
                <Dashboard path="dashboard" />
                {/* <DraftReleases path="add-release" /> */}
                <ManageReleases path="dashboard/releases" />
                <ReleaseArchive path="dashboard/archive" />
                <PreviewRelease path="preview" />
                <ArtistBio path="profile" />
                <NotFound default />
            </Router>
        );
    }
}