import glamorous from 'glamorous';

const Container = glamorous.div(props =>({
  display:'flex',
  border:'solid 1px',
  padding:'10px',
  margin:'5px',  
  height:`${props.size}`,
  width:`${props.size}`
}));

export {Container};