import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState({
    day: '',
    date: '',
    monthYear: ''
  });

  useEffect(() => {
    updateCalendar();
  }, []);

  const updateCalendar = () => {
    const currentDate = new Date();

    setCalendarData({
      date: currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate(),
    });
  };

  return (
    <CalendarContainer>
      <CalendarDate>{calendarData.date}</CalendarDate>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  background: #dddddd;
  color: black;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
    @media (max-width: 1170px) {
      height: 70px;
      width: 70px;
    }
    @media (max-width: 900px) {
      height: 50px;
      width: 50px;
    }
  `;

const CalendarText = styled.p`
  margin: 15px;

`;

const CalendarDate = styled(CalendarText)`
  font-size: 50px;
  font-weight: bold;
  @media (max-width: 1170px) {
    font-size: 30px;
  }
}
  @media (max-width: 900px) {
    font-size : 20px;

}
`;


export default Calendar;
