import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange } from '@material-ui/core/colors';
import Person from '../../assets/img/person.png';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import getUserData from "../../rest/UserREST.js";
import { withRouter } from 'react-router-dom'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: '80px',
        height: '80px'
    },
    profileDetails:{
        listStyle : 'none',
        textAlign: 'center',
        marginRight: '40px'
    },
    vertical_center: {
        marginTop: '20%'
    },
    skip: {
        marginTop:'5px',
        background: '#286efa !important',
        width: '120px',
        borderRadius: '3px',
        color: '#fff'
    },
    userProfileimg: {
        justifyContent: 'center',
    },
    signin_btn: {
        justifyContent: 'center',
        marginTop: '10px'
    },
    close_drawer: {
        transform: 'scaleX(-1)',
        cursor: 'pointer',
        marginTop: '100px'
    },
    double_arrow: {
        cursor: 'pointer',
        marginTop: '100px'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const UserSignup = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isopen_drawer, setDrawer] = React.useState(true);
    const [ProfileImage, setProfileImage] = React.useState('');
    const [ProfileName, setProfileName] = React.useState('');
    const [ProfileEmail, setProfileEmail] = React.useState('');


    const handleDrawer = () => {
        (open) ? setOpen(false) : setOpen(true);
        (isopen_drawer) ? setDrawer(false) : setDrawer(true);
    };
    const responseGoogle = (response) => {
        setProfileImage(response.profileObj.imageUrl)
        setProfileName(response.profileObj.name)
        setProfileEmail(response.profileObj.email)
        let api_url = "api/users/subscribe";
        let data = {
            fullname: response.profileObj.name,
            email: response.profileObj.email,
            token: '',
            subscribed: ''
        }
        getUserData
            .postUserdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
            });
    }

    const LoginUser = () =>{
        console.log('ProfileEmail',ProfileEmail)
        let api_url = "api/users/login";
        let data = {
            email: ProfileEmail,
        }
          getUserData
            .postUserdetails(api_url, data)
            .then(response => {
                props.history.push('/Home')
                console.log("Response Data...", response);
            });
    }
<<<<<<< HEAD
    render() { 
        return ( 
            <React.Fragment>
                <div className={`${this.state.defalutProfile ? "show" : "hide"}`}>
                <div className="default-img center">
                </div>
                <GoogleLogin 
                    clientId="4687849411-7o93g0cm040okm262ahdc8pjjelne21s.apps.googleusercontent.com"
                    buttonText="Google Sign in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
                <div className={`${this.state.fetchedProfile ? "show" : "hide"}`}>
                <div className="center">
                    {/* <img src={this.state.ProfileDetails.imageUrl} className='og-profile-img' /> */}
                    {/* <p className='user-name'>{this.state.ProfileDetails.name}</p> */}
                    {/* <p className='user-email'>{this.state.ProfileDetails.email}</p> */}
                    <button class="next">Next</button>
                </div>
                </div>
            </React.Fragment>
         );
=======
    const SkipAuthentication = () => {
        props.history.push('/Home')
>>>>>>> 4916cc8bdd5a91335826fb0d5fe8ffbae0e3a702
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <Typography variant="h6" gutterBottom >
                        {
                            (open) ? <span>Safe Basket</span> : <span>SB</span>
                        }
                    </Typography>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListItem className={(isopen_drawer) ? classes.double_arrow : classes.close_drawer} onClick={handleDrawer}>
                        <ListItemIcon><DoubleArrowIcon /></ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Grid
                    className={classes.vertical_center}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.userProfileimg}>
                        <Avatar alt="Default Profile" src={(ProfileImage) ? ProfileImage : Person} className={classes.orange}>
                            P
                        </Avatar>
                    </Grid>
                    {
                        (ProfileName && ProfileEmail) ?
                            <div>
                                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.signin_btn}>
                                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.signin_btn}>
                                    <ul className={classes.profileDetails}>
                                        <li>Welcome</li>
                                        <li>{ProfileName}</li>
                                        <li>{ProfileEmail}</li>
                                    </ul>
                                </Grid>
                                </Grid>
                                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.signin_btn}>
                                    <Button className={classes.skip} onClick={LoginUser}>Login</Button>
                                </Grid>
                            </div>

                            :
                            <div>
                                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.signin_btn}>
                                    <GoogleLogin
                                        //development
                                        // clientId="282259011280-okdjp2i41joegf6mlgco0frvpv6cada1.apps.googleusercontent.com"
                                        //production
                                        clientId="4687849411-7o93g0cm040okm262ahdc8pjjelne21s.apps.googleusercontent.com"
                                        buttonText="Google Sign in"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </Grid>
                                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.signin_btn}>
                                    <Button className={classes.skip} onClick={SkipAuthentication}>Skip</Button>
                                </Grid>
                            </div>
                    }
                </Grid>
            </main>
        </div>
    );
}

export default withRouter(UserSignup)
