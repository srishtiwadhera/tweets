import React, {useState} from 'react'
import { Modal, TextField, Typography, Grid, Container, Button } from '@material-ui/core'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import styles from './Home.module.css'
import Tweet from './Tweet'

function Home(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [body, setbody] = useState({
        title:"",
        image:""
     });
     const [notes, setNotes] = useState([]);
     const [show, setShow] = useState(true);

     function addNote(newNote) {
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
      }
     function update(e){
        const { value, name } = e.target;
        setbody(prevValue => {
          if (name === "title") {
            return {
                title: value,
                image: prevValue.image
            };
          } else if (name === "image") {
            return {
                title: prevValue.title,
                image: value
            };
          }
        });
     }  
     function submit(e){
        e.preventDefault();
        
        console.log(body);
        addNote(body);
        setShow(false);
        setbody({
            title: "",
            image: ""
          });
          e.preventDefault();  
      }   
      function handleClose(){
          setModalIsOpen(false)
      }
    
   
    return (
       
        <div>

          <Modal open = {modalIsOpen}>
            <div className="mod">
                {/* Form to add more tweets */}
               <form onSubmit={submit}>
                
                <TextField
                    id="title" 
                    name="title"
                    value = {body.title}
                    onChange={update}
                
                />
                <TextField
                    id="image"
                    name="image" 
                    value = {body.image}
                    onChange={update}
                
                />
                <Button size="large" variant="contained" type="submit" color="default" onClick={handleClose}>Submit</Button>
                
               </form>
            </div>

           </Modal>
        <Container className={styles.contmain}>
            <Grid container spacing= {6} justify="center" className={styles.topcont}>
                <Grid item xs={8} className={styles.head}>
                    <Typography variant="h5" component="h2">
                        User Name
                    </Typography>
                    <Typography color="textSecondary">
                        User Bio Lorem Ipsum ser Bio
                    </Typography>
                    <Typography color="textSecondary">
                        Lorem IpsumUser Bio Lorem Ipsum
                    </Typography>

                </Grid>
                <Grid item xs={4}>
                    <Button size="large" variant="contained" color="default" onClick={() => setModalIsOpen(true)}>Create New Tweet</Button>
                </Grid>
            </Grid>
            <Container className={styles.cont}>
                <Grid container  justify="center" >
                    <Typography variant="h5" component="h2">
                        Recent Tweets of the User About a topic goes below
                    </Typography>
                </Grid>
                {/* some dummy tweets */}
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img1}  alt="image1"/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my Tweet
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img2} alt="image2"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my second Tweet
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img3} alt="image3"/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my third Tweet
                        </Typography>
                    </Grid>
                </Grid>
                <div>
                   {  show?(''):( notes.map((noteItem, index) => {
                        return (
                        <Tweet
                            key={index}
                            id={index}
                            title={noteItem.title}
                            image={noteItem.image}
                        />
                        );
                        }))
                     }
                   
                  
                   </div>
            </Container>
        </Container>
       
        </div>
    );
}

export default Home;