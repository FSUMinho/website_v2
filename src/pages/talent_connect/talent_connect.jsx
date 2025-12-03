import './talent_connect.css'
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';
import opportunitiesData from './talent_connect.json';

const FILTER_TYPES = ['internships', 'projects', 'thesis', 'jobs'];

const TalentConnect = () => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  useEffect(() => {
    setOpportunities(opportunitiesData.opportunities || []);
  }, []);

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredOpportunities = useMemo(() => {
    let filtered = opportunities;

    if (selectedFilters.length > 0) {
      filtered = filtered.filter(opp => 
        selectedFilters.includes(opp.filter)
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(opp =>
        opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedFilters, opportunities, searchTerm]);

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedOpportunity(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className='talent-container'>
      <Title size="h1" title="Talent Connect" />
      <p className='talent-text'>{t('talent.description')}</p>

      <Title size="h2" title={t('talent.oportunities-title')} />

      <div className='oportunities-container'>
        <div className='search-bar-container'>
          <input
            type='text'
            className='search-input'
            placeholder={t('talent.search-placeholder', { defaultValue: 'Search by company or title...' })}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='filters-container'>
          {FILTER_TYPES.map(filter => (
            <div 
              key={filter} 
              className='filter-box'
              onClick={() => toggleFilter(filter)}
            >
              <p>{t(`talent.${filter}-filter`)}</p>
              <input
                type='checkbox'
                className='filter-checkbox'
                checked={selectedFilters.includes(filter)}
                onChange={() => toggleFilter(filter)}
                aria-label={t(`talent.${filter}-filter`)}
              />
            </div>
          ))}
        </div>

        <div className='opportunities-list'>
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map(opp => (
              <div key={opp.id} className='opportunity-card'>
                <div className='card-header'>
                  <div className='company-info'>
                    <h3 className='opportunity-title'>{opp.title}</h3>
                    <p className='opportunity-company'>{opp.company}</p>
                  </div>
                  <span className={`opportunity-badge ${opp.filter}`}>
                    {t(`talent.${opp.filter}-filter`)}
                  </span>
                </div>

                <p className='opportunity-description'>{opp.shortDescription}</p>
                
                {opp.contact && (
                  <div className='opportunity-contact'>
                    <div className='contact-header'>
                      <svg className='contact-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <h4>{t('talent.contact-info', { defaultValue: 'Contact' })}</h4>
                    </div>
                    <div className='contact-details'>
                      <p className='contact-name'>{opp.contact.name}</p>
                      <a href={`mailto:${opp.contact.email}`} className='contact-link'>
                        {opp.contact.email}
                      </a>
                      {opp.contact.phone && (
                        <a href={`tel:${opp.contact.phone}`} className='contact-link'>
                          {opp.contact.phone}
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <button className='opportunity-btn' onClick={() => openModal(opp)}>
                  {t('talent.details', { defaultValue: 'VIEW DETAILS' })}
                </button>
              </div>
            ))
          ) : (
            <div className='no-results'>
              <svg className='no-results-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <p>{t('talent.no-opportunities', { defaultValue: 'No opportunities match your filters' })}</p>
            </div>
          )}
        </div>
      </div>

      {selectedOpportunity && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className='modal-header'>
              <div>
                <h2 className='modal-title'>{selectedOpportunity.title}</h2>
                <p className='modal-company'>{selectedOpportunity.company}</p>
              </div>
              <span className={`opportunity-badge ${selectedOpportunity.filter}`}>
                {t(`talent.${selectedOpportunity.filter}-filter`)}
              </span>
            </div>

            <div className='modal-body'>
              <section className='modal-section'>
                <p>{selectedOpportunity.fullDescription}</p>
              </section>

              {selectedOpportunity.requirements && (
                <section className='modal-section'>
                  <h3>{t('talent.requirements', { defaultValue: 'Requirements' })}</h3>
                  <ul className='modal-list'>
                    {selectedOpportunity.requirements.map((req, index) => (
                      <li className='modal-list-item' key={index}>{req}</li>
                    ))}
                  </ul>
                </section>
              )}

              {selectedOpportunity.requirements && (
                <section className='modal-section'>
                  <h3>{t('talent.functions', { defaultValue: 'Functions' })}</h3>
                  <ul className='modal-list'>
                    {selectedOpportunity.functions.map((func, index) => (
                      <li className='modal-list-item' key={index}>{func}</li>
                    ))}
                  </ul>
                </section>
              )}

              {selectedOpportunity.benefits && (
                <section className='modal-section'>
                  <h3>{t('talent.benefits', { defaultValue: 'Benefits' })}</h3>
                  <ul className='modal-list'>
                    {selectedOpportunity.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </section>
              )}

              {selectedOpportunity.contact && (
                <section className='modal-section modal-contact-section'>
                  <h3>{t('talent.contact-info', { defaultValue: 'Contact Information' })}</h3>
                  <div className='modal-contact'>
                    <p className='modal-contact-name'>{selectedOpportunity.contact.name}</p>
                    <a href={`mailto:${selectedOpportunity.contact.email}`} className='modal-contact-link'>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      {selectedOpportunity.contact.email}
                    </a>
                    {selectedOpportunity.contact.phone && (
                      <a href={`tel:${selectedOpportunity.contact.phone}`} className='modal-contact-link'>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        {selectedOpportunity.contact.phone}
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentConnect;