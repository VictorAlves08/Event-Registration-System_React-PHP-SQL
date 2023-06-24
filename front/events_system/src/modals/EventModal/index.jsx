import React from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import {formatDate, formatStars} from '../../utils/index.js';

export const EventModal = ({onClose, isModalOpen, data}) =>{
  if(!isModalOpen) return null;
  const date = formatDate(data.dateTime);
  const stars = formatStars(5);

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <h2>{data.title}</h2>
          <CloseIcon onClick={onClose} style={{cursor: 'pointer'}}/>
        </Styled.ModalHeader>
        <Styled.ModalBody>

          <div className='body-top'>
              <img src={data.image_url} alt={`Imagem do Evento: ${data.title}`}/>
              <div className='body-top-info'>
                <Styled.InfoTitle>Informações</Styled.InfoTitle>
                <p>{stars}</p>
                <p className='date'>{date}</p>
                <p className='title' title={data.title}>{data.title}</p>
                <p className='type' title={data.type}>{data.type}</p>
                <p className='location' title={data.location}>{data.location}</p>
              </div>
              <div>
                <Styled.InfoTitle>Responsável</Styled.InfoTitle>
                <p title={''} >Victor Alves de Oliveira</p>
                <p title={''} >victor.oliveira@gmail.com</p>
              </div>
            </div>

            <div className='body-bottom'>
              <div className='body-bottom-info'>
                <Styled.InfoTitle>Descrição</Styled.InfoTitle>
                <p>{data.description}</p>
              </div>
              <div className='body-bottom-comments'>
                <Styled.InfoTitle>Comentários</Styled.InfoTitle>
                <p title={''} >A partida foi sensacional asdasdsadasdasdasdasdasds!</p>
                <p>A partida foi sensacional!</p>
                <p>A partida foi sensacional!</p>
              </div>
              <div className='body-bottom-btns'>

              </div>
            </div>

        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}