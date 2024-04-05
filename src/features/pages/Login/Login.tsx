import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleClickEvt() {
    localStorage.setItem('token', '123');
    navigate('/');
  }

  return (
    <div>
      <h2>
        This is Login page
        <button type="button" onClick={handleClickEvt}>Navigate To Index Page</button>
      </h2>
    </div>
  );
}

export default Login;
