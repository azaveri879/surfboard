import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel}
 from '@syncfusion/ej2-react-schedule';
 import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';


function Home() {
    return (
        <ScheduleComponent>
        <Inject services = {[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    )
}

export default Home
