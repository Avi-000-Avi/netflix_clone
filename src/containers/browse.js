import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';


export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading,setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    },[profile.displayName]);

    return profile.displayName ? (
    <>
    {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            
            <Header.Frame>
                <Header.Logo to = {ROUTES.HOME} src ={logo} alt ="Netflix"/>
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
            </Header.Frame>
            
            <Header src="joker1">
                <Header.Feature>
                <Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                </Header.FeatureCallOut>
                </Header.Feature>
            </Header>
        </>
        ) : (
        <SelectProfileContainer user ={user} setProfile = {setProfile}/>
    );
}