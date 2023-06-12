export const Filter = props => {
    const { onChange } = props
  return (
    <section>
      <h2>Find contact by name</h2>
          <input type="text" name="filter" onChange={onChange} />
    </section>
  );
};
