// DO NOT MODIFY THIS FILE FOR BASE MODE!

function AnimalListItem({ animal }) {
  // Renders the list of animals
  return (
    <tr>
      <td>{animal.species_name}</td>
      <td>{animal.class_name}</td>
    </tr>
  );
}

export default AnimalListItem;
