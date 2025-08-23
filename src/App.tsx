import { useState, useEffect } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import FilterPanel from './components/FilterPanel';
import type { Event } from './types/types';
import './index.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const toggleTheme = () => setDarkTheme(prev => !prev);

  useEffect(() => {
    fetch('/src/data/events.json')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  useEffect(() => {
    let filtered = events;

    if (selectedCategory) {
      filtered = filtered.filter(e => e.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(e =>
        e.title.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query)
      );
    }

    setFilteredEvents(filtered);
  }, [events, selectedCategory, searchQuery]);

  const categories = Array.from(new Set(events.map(e => e.category)));

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <Header toggleTheme={toggleTheme} />
      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Timeline events={filteredEvents} onSelect={setSelectedEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

export default App;
