import ListArticle from "./components/listArticle";
import ListCategory from "./components/listCategory";

function App() {

  const list = [
    {username: "user1", subject: "Little Mermaid",category: "fantasy"},
    {username: "user2", subject: "Titanic", category: "drama"},
    {username: "user3", subject: "The Lion King", category: "fantasy"},
    {username: "user4", subject: "The Little Mermaid", category: "fantasy"},
    {username: "user5", subject: "Titanic", category: "drama"},
    {username: "user6", subject: "The Lion King", category: "fantasy"},
    {username: "user7", subject: "The Little Mermaid", category: "fantasy"},
    {username: "user8", subject: "Titanic", category: "drama"},
    {username: "user9", subject: "The Lion King", category: "fantasy"},
    {username: "user10", subject: "The Little Mermaid", category: "fantasy"},
    {username: "user11", subject: "Titanic", category: "drama"},
    {username: "user12", subject: "The Lion King", category: "fantasy"},
];

  return (
    <div className="App">
        <ListArticle/>
        <ListCategory/>
    </div>
  );
}

export default App;
