export const Contacts = props => {
    const { contacts, filter } = props;
    console.log(contacts)
  return (
    <ul>
      {contacts.filter(i=>i.name.includes(filter))
        .map(item => {
          const { name, id, number } = item;
          return (
            <li key={id}>
              {name} : {number}
            </li>
          );
        })}
    </ul>
  );
};
