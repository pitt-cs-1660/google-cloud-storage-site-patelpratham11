import React from 'react'
import { IconButton, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'
import FileOpenIcon from '@mui/icons-material/FileOpen';


const socials = [
    {
        icon: GitHub, url: "https://github.com/patelpratham11", name: "GitHub"
    }, 
    {
        icon: LinkedIn, url: "https://www.linkedin.com/in/patelpratham11/", name: "LinkedIn"
    },
    {
        icon: FileOpenIcon, url: "https://drive.google.com/file/d/1YecMCj92PPYvt9Xj47zfGROZ44kzmgxW/view?usp=share_link", name: "Resume"
    }
]

const useStyles = makeStyles((theme) =>({
    collection:{
        color: "rgba(0, 0, 0, 0)",
        "&:hover":{
            color: "white"
        }
    }, 
    icons:{
        height: 60,
        width: 60, 
    },
    caption:{
    }
}))

export default function Socials() {
    const styles = useStyles()
  return (
    // <Hidden >
        <Grid container direction='column'>
            {socials.map((social)=>{
               return( 
               <Grid item  key={social.url}>
                    <Link className={styles.collection} href={social.url}>
                        <IconButton>
                            <social.icon fontSize='large' />
                        </IconButton>
                        <Typography className={styles.caption} variant='paragraph'>{social.name}</Typography>
                    </Link>
                </Grid>
                        
            )})}
        </Grid>
        
    //</Hidden>
  )
}
