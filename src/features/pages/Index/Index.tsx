import Banner from './components/Banner/Banner';
import SearchBar from './components/SearchBar/SearchBar';
import TopChoices from './components/TopChoices/TopChoices';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import GetInspiration from './components/GetInspiration/GetInspiration';

function Index() {
  return (
    <div>
      <Banner />
      <SearchBar />
      <TopChoices />
      <PopularDestinations />
      <GetInspiration />
    </div>
  );
}

export default Index;
