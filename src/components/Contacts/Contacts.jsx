export const Contacts = props => {
  const { contacts, filter, onClick } = props;
  
  console.log(contacts);
  return (
    <ul>
      {contacts
        .filter(i => i.name.includes(filter))
        .map(item => {
          const { name, id, number } = item;
          return (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={onClick} value={id}>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};
