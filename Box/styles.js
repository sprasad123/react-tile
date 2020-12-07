import glamorous from 'glamorous';

const Container = glamorous.div(props =>({
  display:'flex',
  border:'solid 1px',
  height:'100%',
  
  alignItems: 'center',
  justifyContent: 'center',
  padding:'10'
}));

export {Container};