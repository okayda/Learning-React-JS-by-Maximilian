import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Jhon", text: "Learn is one of my passion" },
  {
    id: "q2",
    author: "Quenano",
    text: "building thing is second of my passion",
  },
];

const AllQuotes = function () {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
