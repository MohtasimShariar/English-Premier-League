import React from 'react';
import './Leagues.css'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeagueDet from '../LeagueDet/LeagueDet';

const Leagues = (props) => {
    const teamUrl='https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='
    const { strTeamBadge, strTeam ,strSport,idTeam} = props.leagues;

    return (
        <div className='mx-5'>
              <Card className='p-3 mx-auto my-2'
                             style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={strTeamBadge} />
                        <Card.Body className='text-center'>
                            <Card.Title >{strTeam}</Card.Title>
                            <Card.Text>
                                <p>Sports Type : {strSport}</p>
                                {/* <p><Link to={`/leagues/${idTeam}`}>Explore</Link></p> */}
                            </Card.Text>
                            <Button variant="primary"><Link className='link-btn' to={`/leagues/${idTeam}`}>Explore</Link> </Button>
                        </Card.Body>
                    </Card>
        </div>
        // <Container className='container bg-warning'>
        //     <Row>
        //         <Col>
                  
        //         </Col>
        //     </Row>

        // </Container>
    );
};

export default Leagues;









// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });


// const Leagues = () => {
//     const classes = useStyles();
//     return (

//         <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//     );
// };

// export default Leagues;

