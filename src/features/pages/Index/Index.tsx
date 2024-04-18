import Banner from './components/Banner/Banner';
import SearchBar from './components/SearchBar/SearchBar';
import TopChoices from './components/TopChoices/TopChoices';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';

function Index() {
  return (
    <div>
      <Banner />
      <SearchBar />
      <TopChoices />
      <PopularDestinations />
    </div>
  );
}

export default Index;
