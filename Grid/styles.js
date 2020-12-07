import glamorous from 'glamorous';

const Container = glamorous.div(props =>({
  display:'grid',
  border:'solid 1px',
   gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(5, 100px)',
    gridGap: '1rem',
    padding:'10px'
}));

const Header = glamorous.div({
  gridRow: '1 / 2',
  gridColumn: '1 / 4',
  border:'solid 1px'
});

export {Container, Header};