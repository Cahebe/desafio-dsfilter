import CardFilter from "../CardFilter";
import CardList from "../CardList";
import "./styles.css";

export default function Body() {
  return (
    <main className="body-container">
      <CardFilter />
      <CardList />
    </main>
  );
}
