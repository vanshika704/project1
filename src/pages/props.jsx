
import PropTypes from "prop-types"; // to do prop validation 
// child component 
const Homework = ({ subject }) => {
  return <h1>Todays Homework for {subject}</h1>;
};

// Adding prop validation for Homework
Homework.propTypes = {
  subject: PropTypes.string.isRequired, 
};
//parent component 
function Proops() {
  return (
    <>
      <Homework subject="English , Hindi , Maths " />
    </>
  );
}

export default Proops;
