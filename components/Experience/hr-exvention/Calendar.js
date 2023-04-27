import React from "react";
import AwesomeSlider from "react-awesome-slider";

const calendarList = [
  {
    src: "/images/calendar-hr/miniCalendar.png",
    title: "mini",
  },
  {
    src: "/images/calendar-hr/largeCalendar.png",
    title: "large",
  },
  {
    src: "/images/calendar-hr/detailCalendar.png",
    title: "detail",
  },
  
];

const Calendar = () => {
  return (
    <>
      <div className="pt-6">
        <h1 className="font-bold text-3xl">Calendar module</h1>
      </div>
      <div className="flex flex-col gap-[5rem] items-center justify-center">
        <div className="w-[300px] md:w-[700px] h-full m-auto ">
          <AwesomeSlider animation="cubeAnimation">
            {calendarList.map((items, index) => (
              <div
                key={index}
                className="h-full w-full overflow-hidden rounded-md border-solid border-[1px]"
              >
                <img
                  src={items.src}
                  alt={items.title}
                  className="w-full h-full"
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </>
  );
};

export default Calendar;
