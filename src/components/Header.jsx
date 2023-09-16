import Navigation from "./Navigation";

export default function Header({ setCurrentPage, currentPage }) {
  return (
    <>
      <header>
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </header>
    </>
  );
}