import firebase from 'firebase';
import { secrets } from './secrets';
var fire = firebase.initializeApp(secrets);


export default fire;
