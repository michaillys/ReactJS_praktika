const Message = ({ message, guesses }) => {
  return (
    <div>
      <h2>{message}</h2>
      {guesses.length > 0 && (
        <div>
          <h3>Jūsų spėjimai:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFFF', padding: '5 px' }}>
          <p>{guesses.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
  