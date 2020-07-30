import React, {useState} from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import styles from './Home.module.css'
import Tweet from './Tweet'

function Home(){
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
          } else if (name === "content") {
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
        window.$('#exampleModal').modal('hide')
      }
   
    return (
        <div>
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
                    <Button size="large" variant="contained" color="default">Create New Tweet</Button>
                </Grid>
            </Grid>
            <Container className={styles.cont}>
                <Grid container  justify="center" >
                    <Typography variant="h5" component="h2">
                        Recent Tweets of the User About a topic goes below
                    </Typography>
                </Grid>
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
                            content={noteItem.image}
                        />
                        );
                        }))
                     }
                   
                  
                   </div>
            </Container>
        </Container>
        <div class="modal fade exampleModal "   id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Tweet</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={submit}>
  <div class="form-group">
    <label for="title">Title</label>
    <input name="title" value = {body.title} onChange ={update} type="text" class="form-control" id="title"/>
  </div>
  <div class="form-group">
    <label for="img">Image url</label>
    <input type="text" name ="image" value ={body.image} onChange ={update}  class="form-control" id="img"/>
  </div>
  <button type="submit" class=" btns btn-primary modals"  onClick={handleClose}  >Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class=" btnss btn-secondary" data-dismiss="modal" >Close</button>

      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Home;