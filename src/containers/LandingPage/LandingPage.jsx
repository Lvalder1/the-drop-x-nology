import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import { globalHistory } from "@reach/router";
import { firestore } from '../../firebase';


export default class LandingPage extends Component {

    handleSubmitArtist = () => {
        if (this.props.additionalUserInfo.isNewUser) {
            firestore
                .collection("Artists")
                .add({
                    UID: this.props.user.uid,
                    type: "artist",
                    artistName: this.props.user.displayName,
                    artistProfileImage: this.props.user.photoURL,
                    bio: ""
                })
                .then(() => {
                    globalHistory.navigate("/private/artist/home");
                })
        } else {
            globalHistory.navigate("/private/artist/home");
        }
    }

    handleSubmitFan = () => {
        if (this.props.additionalUserInfo.isNewUser) {
            firestore
                .collection("Fans")
                .add({
                    UID: this.props.user.uid,
                    type: "fan",
                    followedArtists: "",
                    userName: this.props.user.displayName,
                })
                .then(() => {
                    globalHistory.navigate("/private/fan/home");
                })
            } else {
                globalHistory.navigate("/private/fan/home");
            }
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.mainlogo}>
                    <div className={styles.logoimg1}></div>
                    <div className={styles.logotext}>Choose your account type</div>
                </div>

                <div className={styles.leftArtistWrapper} onClick={this.handleSubmitArtist}>
                    <div className={styles.infoWrapper}>
                        <h1>Artists</h1>
                        <h2 className={styles.artistinfo}>Plan your next release.</h2>
                        <h3 className={styles.artistinfo}>Build anticipation. Timing is everything.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're an Artist
                        </p>
                    </div>
                </div>

                <div className={styles.rightFanWrapper} onClick={this.handleSubmitFan}>
                    <div className={styles.infoWrapper}>
                        <h1>Fans</h1>
                        <h2 className={styles.faninfo}>Be the first to know.</h2>
                        <h3 className={styles.faninfo}>Get excited. Share experiences.</h3>
                        <p className={styles.mobileText}>
                            Tap here if you're a Fan
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
