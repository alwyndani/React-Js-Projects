/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

const Home = ({ IsLoggedIn }) => {

  const storedDataString = localStorage.getItem("formData");
  const storedData = JSON.parse(storedDataString);
  const user = storedData.Name;

   const HandleLogout = () => {
     localStorage.removeItem('formData');
     IsLoggedIn();
   };

  return (
    <>
      <h2>Welcome {user} </h2>
      <button
        onClick={()=> HandleLogout()}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
