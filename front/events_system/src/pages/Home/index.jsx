import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

import { Slider, Filter, Card } from '../../components/index';
import { EventCreateModal, EventModal, ProfileModal } from '../../modals/index';

import { getAllEvents } from '../../services/event.api';
import { useAuth } from '../../context/useAuth';

import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const date = new Date();
  const navigate = useNavigate();
  const isLoggedIn = useAuth();

  const [eventDataModal, setEventDataModal] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [eventDataFiltered, setEventDataFiltered] = useState([])
  const [filter, setFilter] = useState({ eventName: '', eventCategory: '', eventScore: 6 });

  const [isModalEventOpen, setIsModalEventOpen] = useState(false);
  const [isModalCreateEventOpen, setIsModalCreateEventOpen] = useState(false);
  const [isModalProfileOpen, setIsModalProfileOpen] = useState(false);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    const filteredData = eventData.filter((event) => {
      const eventNameMatch = newFilter.eventName === '' || event.title.toLowerCase().includes(newFilter.eventName.toLowerCase());
      const eventCategoryMatch = newFilter.eventCategory === '' || event.type.toLowerCase().includes(newFilter.eventCategory.toLowerCase());
      const eventScoreMatch = newFilter.eventScore === 6 || event.averageScore === newFilter.eventScore;
      return eventNameMatch && eventCategoryMatch && eventScoreMatch;
    });
    setEventDataFiltered(filteredData);
  };

  const handleGoToLogin = () => navigate('/login');
  const handleGoToRegistration = () => navigate('/registration');
  const handleGoToLogout = () => {
    sessionStorage.removeItem('isUserLoggedIn');
    navigate('/login')
  };

  const handleIsModalEventOpen = (data = null) => {
    setEventDataModal(data)
    setIsModalEventOpen(!isModalEventOpen)
  };

  const handleIsModalCreateEventOpen = () => {
    setIsModalCreateEventOpen(!isModalCreateEventOpen)
  };

  const handleIsModalProfileOpen = () => {
    setIsModalProfileOpen(!isModalProfileOpen)
  };

  useEffect(() => {
    getAllEvents()
      .then((events) => {
        setEventData(events.data);
        setEventDataFiltered(events.data);
      })
  }, []);

  useEffect(() => {
    getAllEvents()
      .then((events) => {
        setEventData(events.data);
        setEventDataFiltered(events.data);
      })
  }, [isModalCreateEventOpen, isModalEventOpen, isModalProfileOpen]);

  return (
    <>
      {isModalEventOpen && eventDataModal &&
        <EventModal
          handleIsModalCreateEventOpen={handleIsModalCreateEventOpen}
          isModalEventOpen={isModalEventOpen}
          onClose={handleIsModalEventOpen}
          data={eventDataModal}
          isLoggedIn={isLoggedIn}
        />
      }

      {isModalCreateEventOpen &&
        <EventCreateModal
          eventDataModal={eventDataModal}
          isLoggedIn={isLoggedIn}
          isModalCreateEventOpen={isModalCreateEventOpen}
          onClose={handleIsModalCreateEventOpen}
          onCloseEventModal={handleIsModalEventOpen}
        />
      }

      {isModalProfileOpen &&
        <ProfileModal
          isModalProfileOpen={isModalProfileOpen}
          onClose={handleIsModalProfileOpen}
          isLoggedIn={isLoggedIn}
        />
      }

      <Styled.Container>
        <Styled.Header>
          <h2>Sistema de Cadastro de Eventos</h2>
          <div>
            {isLoggedIn ?
              <div className='userOn'>
                <text>Olá, {isLoggedIn.name}!</text>
                <div>
                  <button type="button" onClick={handleIsModalProfileOpen}>Perfil</button>
                  <button type="button" onClick={handleGoToLogout}>Logout</button>
                </div>
              </div>
              :
              <>
                <button type="button" onClick={handleGoToLogin}>Login</button>
                <button type="button" onClick={handleGoToRegistration}>Registro</button>
              </>
            }
          </div>
        </Styled.Header>

        <Slider />

        <Styled.Body>
          <Styled.FilterContainer>
            <Filter handleFilter={handleFilter} filter={filter} />
            {isLoggedIn &&
              <button type='button' onClick={handleIsModalCreateEventOpen}>CRIAR NOVO EVENTO</button>
            }
          </Styled.FilterContainer>
          <Styled.CardContainer>
            {eventDataFiltered?.length > 0 ?
              eventDataFiltered.map((data) => {
                return (
                  <Card
                    key={data.id_event}
                    data={data}
                    onClick={() => handleIsModalEventOpen(data)}
                  />
                )
              })
              :
              <h3>NENHUM EVENTO ENCONTRADO</h3>
            }
          </Styled.CardContainer>
          <a href='https://github.com/VictorAlves08/Event-Management-System_ReactJS-PHP-SQL' target='_blank'>
            Victor A. de Oliveira - {date.getFullYear()}
          </a>
        </Styled.Body>
      </Styled.Container>
    </>
  );
}
