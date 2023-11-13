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
  height: 100px;
  width: 100px;
  background: #dddddd;
  color: black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-right:5%;
`;

const CalendarText = styled.p`
  margin: 15px;
`;

const CalendarDate = styled(CalendarText)`
  font-size: 50px;
  font-weight: bold;
`;


export default Calendar;
