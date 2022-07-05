import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import noImage from '../sourceImage/no_image.png'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.light,
  },
  titleBar: {
    background:
      'black',
  },
}));

function SingleLineImageList() {
  const classes = useStyles();
  const navigate=useNavigate();
  const [post, setPost] = useState(null);
 
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ef2fc7966b7886b23c82a2279f82783c&language=en-US&page=1').then(response => {
      setPost(response.data.results);
    });
  }, []);

 


  if (!post) return null;

  // console.log(post);

  return (
    <div>
      <h2>Recommended Movies</h2>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>
          {post.map((item) => (
           
            <ImageListItem key={item.id} onClick={()=>{
              navigate(`/About/${item.id}`)
            }}
              >
              <img
                src={item.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` : noImage}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
            
          ))}
        </ImageList>
      </div>
    </div>
  );
}
export default SingleLineImageList;