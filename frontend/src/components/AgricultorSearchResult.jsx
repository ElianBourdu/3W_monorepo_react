import { useSelector } from 'react-redux';

function AgricultorSearchResult() {
  const searchResult = useSelector((state) => state.search.searchResult);

  console.log(searchResult)
  if (searchResult.length !== 0) {
    return (
      <div>
        <h2>Résultats de recherche :</h2>
        <ul className="searchResponse__container">
          {searchResult.map(user => (
            <li className="searchResponse__user" key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AgricultorSearchResult;
