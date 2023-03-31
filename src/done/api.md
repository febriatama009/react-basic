const [users, setUsers] = useState([]);

useEffect(() => {
async function getUsers() {
try {
const { data } = await axios.get(
`https://jsonplaceholder.typicode.com/users`
);
setUsers(data);
} catch (error) {
console.log(error.message);
}
}

    getUsers();

}, []);

<Card>
        <Card.Title>{users.length} users is active</Card.Title>
        <Card.Body>
          {users.length > 0 ? (
            <ol>
              {users.map((user) => (
                <li key={user.id} className="flex justify-between space-x-8">
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                </li>
              ))}
            </ol>
          ) : (
            "No users are active"
          )}
        </Card.Body>
      </Card>
