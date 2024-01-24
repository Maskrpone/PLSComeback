// CalendarWidget.js
import React, { useState } from 'react';
import Arrow from './Arrow';

const CalendarWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <button class="learn-more" onClick={toggleVisibility}>
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Booking</span>
          </button>
      {isVisible && (
        <><iframe
            class="CalendarOutlook"
          title="Calendrier Outlook"
          src="https://outlook.office365.com/owa/calendar/8d4bcdcaad534ad6b93bd46dd6af4f00@student.junia.com/a6c73d750e8a490bbf6521864f8eaa7c9348958668257446464/calendar.html"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="auto"
        ></iframe>
        <button class="BACK" onClick={toggleVisibility}>
        <Arrow className="slick-prev" direction="prev" />
        </button>
          </>
      )}
    </div>
  );
};

export default CalendarWidget;
