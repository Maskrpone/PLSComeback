// CalendarWidget.js
import React, { useState } from 'react';
import Arrow from './Arrow';
import PageTestCalendar from "./Iframe_calendar_machines";
import {jsonData2} from "./SliderEmprunt";

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
          <>
              <div className="block m-auto text-white text-center text-3xl">
                  <span className="text-black">{jsonData2[0].object_name}</span>
              </div>
              <div className="bg-black">
                  <PageTestCalendar jsonData2={jsonData2}/>
              </div>
          </>
      )}
    </div>
  );
};

export default CalendarWidget;
