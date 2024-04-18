import Banner from './components/Banner/Banner';
import SearchBar from './components/SearchBar/SearchBar';
import TopChoices from './components/TopChoices/TopChoices';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import GetInspiration from './components/GetInspiration/GetInspiration';
import Subscribe from './components/Subscribe/Subscribe';

function Index() {
  return (
    <div>
      <Banner />
      <SearchBar />
      <TopChoices />
      <PopularDestinations />
      <GetInspiration />
      <Subscribe />
    </div>
  );
}

export default Index;
