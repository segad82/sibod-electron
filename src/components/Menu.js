import { Card, ListGroup, Button } from 'react-bootstrap';

function Menu(props) {
  let { name, options } = props;
  let buttons = options.map(opt => <ListGroup.Item key={opt.url}><Button href={opt.url} variant="outline-dark" size="lg" block>{opt.name}</Button></ListGroup.Item> );
  //<Card.Img variant="top" src="holder.js/100px180" />
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
          {buttons}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Menu;