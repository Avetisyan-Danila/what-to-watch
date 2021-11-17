import {useState} from 'react';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviews from '../tabs-reviews/tabs-reviews';
import {Film} from '../../types/film';

const tabs = [
  'Overview',
  'Details',
  'Reviews',
];

type TabsProps = {
  film: Film;
};

function Tabs(props: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  function clickEventHandler(id: number) {
    setActiveTabIndex(id);
  }

  const {film} = props;

  return (
    <div className='film-card__info'>
      <div className='film-card__poster film-card__poster--big'>
        <img src={film.posterImage} alt={film.title} width='218' height='327' />
      </div>

      <div className='film-card__desc'>
        <nav className='film-nav film-card__nav'>
          <ul className='film-nav__list'>
            {
              tabs.map((tab, index) => {
                const keyValue = `tab-${index}`;

                return <li key={keyValue} className={`film-nav__item + ${activeTabIndex === index ? 'film-nav__item--active' : ''}`}><a href='#' className='film-nav__link' onClick={
                    (e) => {
                      e.preventDefault();
                      clickEventHandler(index);
                      setActiveTab(tab)
                    }
                  }>{tab}</a>
                </li>
              })
            }
          </ul>
        </nav>
        {
          activeTab === 'Overview' ?
          <TabsOverview film={film} />
          :
          ''
        }
        {
          activeTab === 'Details' ?
          (<TabsDetails film={film} />)
          :
          ''
        }
        {
          activeTab === 'Reviews' ?
          (<TabsReviews />)
          :
          ''
        }
      </div>
    </div>
  );
}

export default Tabs;