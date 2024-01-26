import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {
    Button,
    Datepicker,
    Eventcalendar,
    Input,
    localeFr, momentTimezone,
    Popup,
    setOptions,
    Snackbar,
    Switch,
    Textarea,
} from '@mobiscroll/react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import "./Calendar_tools.css";
import {jsonData2} from "./SliderEmprunt";
import axios from "axios";
import {API_IP} from "../Constants";
import Cookies from "js-cookie";


setOptions({
    locale: localeFr,
    theme: 'ios',
    themeVariant: 'light'
});

const now = new Date();


function Event(id, start, end, title, description) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.title = title;
    this.description = description;
}

function User (nameUser, firstname){
    this.nameUser = nameUser;
    this.firstname = firstname;
}

const defaultEvents = [
    /*{
        id: 1,
        start: '2024-01-08T13:00',
        end: '2024-01-08T13:45',
        title: "Lunch @ Butcher's",
        description: '',
        allDay: true,
        free: false,
        color: '#009788',
        editable: false
    },
    {
        id: 2,
        start: '2024-01-24T15:00',
        end: '2024-01-24T16:00',
        title: 'General orientation',
        description: '',
        allDay: true,
        free: false,
        color: '#ff9900',
        editable: false
    },
    {
        id: 3,
        start: '2024-01-23T18:00',
        end: '2024-01-23T22:00',
        title: 'Dexter BD',
        description: '',
        allDay: true,
        free: false,
        color: '#3f51b5',
        editable: false
    },
    {
        id: 4,
        start: '2024-01-25T10:30',
        end: '2024-01-25T11:30',
        title: 'Stakeholder mtg.',
        description: '',
        allDay: true,
        free: false,
        color: '#f44437',
        editable: false
    },*/
];


const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

function App() {
    const [myEvents, setMyEvents] = useState(defaultEvents);
    const [tempEvent, setTempEvent] = useState(null);
    const [undoEvent, setUndoEvent] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [anchor, setAnchor] = useState(null);
    const [start, startRef] = useState(null);
    const [end, endRef] = useState(null);
    const [popupEventTitle, setTitle] = useState('');
    const [popupEventDescription, setDescription] = useState('');
    const [popupEventAllDay, setAllDay] = useState(true);
    const [popupEventDate, setDate] = useState([]);
    const [popupEventStatus, setStatus] = useState('busy');
    const [mySelectedDate, setSelectedDate] = useState(now);
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const [colorAnchor, setColorAnchor] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [tempColor, setTempColor] = useState('');
    const [isSnackbarOpen, setSnackbarOpen] = useState(false);
    const colorPicker = useRef();

    useEffect(() => {
        console.log(jsonData2);
        // Faites ce que vous voulez avec les donnÃ©es ici
    }, []);

    const myView = useMemo(() => ({
        calendar: { labels: true }
    }), []);

    const colorButtons = useMemo(
        () => [
            'cancel',
            {
                text: 'Set',
                keyCode: 'enter',
                handler: () => {
                    setSelectedColor(tempColor);
                    setColorPickerOpen(false);
                },
                cssClass: 'mbsc-popup-button-primary',
            },
        ],
        [tempColor],
    );

    const colorResponsive = useMemo(
        () => ({
            medium: {
                display: 'anchored',
                touchUi: false,
                buttons: [],
            },
        }),
        [],
    );

    const snackbarButton = useMemo(
        () => ({
            action: () => {
                setMyEvents((prevEvents) => [...prevEvents, undoEvent]);
            },
            text: 'Undo',
        }),
        [undoEvent],
    );

    const handleSnackbarClose = useCallback(() => {
        setSnackbarOpen(false);
    }, []);

    const saveEvent = useCallback(() => {
        const specificCookie = Cookies.get('user_data');
        const jsonCookie= JSON.parse(specificCookie);
        const prenom = jsonCookie.prenom;
        const nom = jsonCookie.nom;

        // Nom et prénom de la personne connectée
        let actualUser = new User(nom,prenom);
        console.log(jsonData2[0].object_name);
        const newEvent = {
            id: tempEvent.id,
            object_name: jsonData2[0].object_name,
            title: ("" + actualUser.firstname + " " + actualUser.nameUser),
            description: popupEventDescription,
            start: popupEventDate[0],
            end: popupEventDate[1],
            allDay: popupEventAllDay,
            status: popupEventStatus,
            color: tempEvent.color,
            //color: selectedColor,
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex((x) => x.id === tempEvent.id);
            const newEventList = [...myEvents];

            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        setSelectedDate(popupEventDate[0]);
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent]);

    const deleteEvent = useCallback(
        (event) => {
            setMyEvents(myEvents.filter((item) => item.id !== event.id));
            setUndoEvent(event);
            setTimeout(() => {
                setSnackbarOpen(true);
            });
        },
        [myEvents],
    );

    const loadPopupForm = useCallback((event) => {
        setDescription(event.description);
        setDate([event.start, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);

    // handle popup form changes

    const titleChange = useCallback((ev) => {
        const specificCookie = Cookies.get('user_data');
        const jsonCookie= JSON.parse(specificCookie);
        const prenom = jsonCookie.prenom;
        const nom = jsonCookie.nom;

        // Nom et prénom de la personne connectée
        let actualUser = new User(nom,prenom);
        setTitle(actualUser.firstname + " " + actualUser.nameUser);
    }, []);

    const descriptionChange = useCallback((ev) => {
        setDescription(ev.target.value);
    }, []);

    const allDayChange = useCallback((ev) => {
        setAllDay(ev.target.checked);
    }, []);

    const dateChange = useCallback((args) => {
        setDate(args.value);
    }, []);

    const statusChange = useCallback((ev) => {
        setStatus(ev.target.value);
    }, []);

    const onDeleteClick = useCallback(() => {
        deleteEvent(tempEvent);
        setOpen(false);
    }, [deleteEvent, tempEvent]);

    // scheduler options

    const onSelectedDateChange = useCallback((event) => {
        setSelectedDate(event.date);
    }, []);

    const onEventClick = useCallback(
        (args) => {
            if (args.event.editable !== false) {
                setEdit(true);
                setTempEvent({...args.event});
                // fill popup form with event data
                loadPopupForm(args.event);
                setAnchor(args.domEvent.target);
                setOpen(true);
            }
        },
        [loadPopupForm],
    );

    const onEventCreated = useCallback(
        (args) => {
            // createNewEvent(args.event, args.target)
            setEdit(false);
            setTempEvent(args.event);
            // fill popup form with event data
            loadPopupForm(args.event);
            setAnchor(args.target);
            // open the popup
            setOpen(true);
        },
        [loadPopupForm],
    );

    const onEventDeleted = useCallback(
        (args) => {
            deleteEvent(args.event);
        },
        [deleteEvent],
    );

    const onEventUpdated = useCallback(() => {
        // here you can update the event in your storage as well, after drag & drop or resize
        // ...
    }, []);

    // datepicker options
    const controls = useMemo(() => (popupEventAllDay ? ['date'] : ['datetime']), [popupEventAllDay]);
    const datepickerResponsive = useMemo(
        () =>
            popupEventAllDay
                ? {
                    medium: {
                        controls: ['calendar'],
                        touchUi: false,
                    },
                }
                : {
                    medium: {
                        controls: ['calendar', 'time'],
                        touchUi: false,
                    },
                },
        [popupEventAllDay],
    );

    // popup options
    const headerText = useMemo(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);
    const popupButtons = useMemo(() => {
        if (isEdit) {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Save',
                    cssClass: 'mbsc-popup-button-primary',
                },
            ];
        } else {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Add',
                    cssClass: 'mbsc-popup-button-primary',
                },
            ];
        }
    }, [isEdit, saveEvent]);

    const popupResponsive = useMemo(
        () => ({
            medium: {
                display: 'anchored',
                width: 400,
                fullScreen: false,
                touchUi: false,
            },
        }),
        [],
    );

    const onClose = useCallback(() => {
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents]);

    const selectColor = useCallback((color) => {
        setTempColor(color);
    }, []);

    const openColorPicker = useCallback(
        (ev) => {
            selectColor(selectedColor || '');
            setColorAnchor(ev.currentTarget);
            setColorPickerOpen(true);
        },
        [selectColor, selectedColor],
    );

    const changeColor = useCallback(
        (ev) => {
            const color = ev.currentTarget.getAttribute('data-value');
            selectColor(color);
            if (!colorPicker.current.s.buttons.length) {
                setSelectedColor(color);
                setColorPickerOpen(false);
            }
        },
        [selectColor, setSelectedColor],
    );

    const [myEvents2, setMyEvents2] = useState(defaultEvents);


    // DÃ©placez la dÃ©finition de la fonction extractEventInfo ici
    const extractEventInfo = (event) => {
        return {
            id: event.id,
            object_name: event.object_name,
            title: event.title,
            description: event.description,
            start: event.start,
            end: event.end,
            allDay: true,
            status: event.status,
            color: event.color,
            editable: false,
        };
    };

    // DÃ©placez la dÃ©finition de la fonction extractCalendarInfo ic
    const extractCalendarInfo = useCallback(() => {
        return myEvents.map(extractEventInfo);
    }, [myEvents, extractEventInfo]);

    const onExport = useCallback(() => {
        const calendarInfo = extractCalendarInfo();
        // Convertir les donnÃ©es en format JSON
        const jsonData2 = JSON.stringify(calendarInfo, null, 2);
        console.log("GGGGGGGGGGGGGGGGGGGG");
        console.log(jsonData2);
        console.log(calendarInfo[0]);
        const name_object = calendarInfo[0].object_name;
        console.log(calendarInfo);

        // Afficher un message de confirmation Ã  l'utilisateur
        setSnackbarOpen(true);
        const fetchData = async () => {
            try {
                await axios.put(`http://${API_IP}:3000/machines/` + name_object, {"calendar": jsonData2})
                    .then(response => {
                        console.log('Mise à jour réussie :', response.data);
                        alert("Mise à jour réussie");
                    })
                    .catch(error => {
                        console.error('Erreur lors de la mise à jour :', error);
                        alert("Mise à jour échouée");
                    });
            } catch (error) {
                console.log(error);
            }

            // Post dans reservation
            try {
                const end = new Date(calendarInfo[calendarInfo.length - 1].end).toISOString();
                console.log(end)
                const userCookie = JSON.parse(Cookies.get("user_data")) || null;
                await axios
                    .post(`http://${API_IP}:3000/reserve`, {
                        username: userCookie.username,
                        name: name_object,
                        quantity: 1,
                        plannedReturnDate: end,
                    })
                    .then((response) => {
                        console.log("Update succeed :", response.data);
                    })
                    .catch((error) => {
                        console.error("Update failed :", error);
                    });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        console.log('Calendrier exporté en JSON:', jsonData2);


    }, [extractCalendarInfo]);

    /*
    const importCalendarInfo = useCallback(() => {
        return myEvents.map(importEventInfo);
    }, [myEvents, importEventInfo]);

    const onImport = useCallback(() => {
        const jsonData2String = '[{"id":1,"title":"Lunch @ Butchers","description":"","start":"2024-01-08T13:00","end":"2024-01-08T13:45","allDay":true,"color":"#009788","editable":false},{"id":2,"title":"General orientation","description":"","start":"2024-01-24T15:00","end":"2024-01-24T16:00","allDay":true,"color":"#ff9900","editable":false},{"id":3,"title":"Dexter BD","description":"","start":"2024-01-23T18:00","end":"2024-01-23T22:00","allDay":true,"color":"#3f51b5","editable":false},{"id":4,"title":"Stakeholder mtg.","description":"","start":"2024-01-25T10:30","end":"2024-01-25T11:30","allDay":true,"color":"#f44437","editable":false},{"id":"mbsc_1","title":"Test","start":"2024-01-09T23:00:00.000Z","end":"2024-01-12T23:00:00.000Z","allDay":true,"status":"busy","editable":false},{"id":"mbsc_2","title":"zgrlgnrljgeirjgierjg","start":"2024-01-18T23:00:00.000Z","end":"2024-01-21T23:00:00.000Z","allDay":true,"status":"busy","editable":false},{"id":"mbsc_3","title":"zehef","start":"2024-01-02T23:00:00.000Z","end":"2024-01-04T23:00:00.000Z","allDay":true,"status":"busy","editable":false}]';
        const jsonData2 = JSON.parse(jsonData2String);


        // Afficher un message de confirmation Ã  l'utilisateur
        setSnackbarOpen(true);

        console.log('Calendrier importÃ© en JSON:', jsonData2);

    }, [ImportCalendarInfo]);*/
    /*
        const [events, setEvents] = useState([
            new Event(1,'2024-01-08T13:00', '2024-01-08T13:45',"Carte ARM-32",''),
        ]);*/

    //const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        // Utilisez une fonction pour crÃ©er myEvents lorsque events change
        const updateMyEvents = () => {
            const specificCookie = Cookies.get('user_data');
            const jsonCookie= JSON.parse(specificCookie);
            const prenom = jsonCookie.prenom;
            const nom = jsonCookie.nom;

            const newMyEvents = jsonData2.map(event => {
                // Vérifie si le title correspond au format "prenom nom"
                if (event.title === prenom + " " + nom) {
                    // Met à jour la propriété editable seulement pour l'utilisateur correspondant
                    return { ...event, editable: true };
                }

                // Aucune mise à jour nécessaire pour les autres éléments
                return event;
            });


            // Mise Ã  jour de myEvents avec les nouveaux Ã©vÃ©nements
            setMyEvents(newMyEvents);
        };

        updateMyEvents();
    }, []);

    return (
        <>
            <div className="text-center block m-auto">
                <Button onClick={onExport} style={{ backgroundColor: '#d97706', color: '#fff' }} >Valider la reservation</Button>
            </div>
            <Eventcalendar
                themeVariant="dark"
                view={myView}
                data={myEvents}
                clickToCreate="single"
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                eventOverlap={false}
                selectedDate={mySelectedDate}
                onSelectedDateChange={onSelectedDateChange}
                onEventClick={onEventClick}
                onEventCreated={onEventCreated}
                onEventDeleted={onEventDeleted}
                onEventUpdated={onEventUpdated}
                onDataExport={onExport} // Appel de la fonction onExport lors de l'exportation des donnÃ©es
            />
            <Popup
                display="bottom"
                fullScreen={true}
                contentPadding={false}
                headerText={headerText}
                anchor={anchor}
                buttons={popupButtons}
                isOpen={isOpen}
                onClose={onClose}
                responsive={popupResponsive}
            >
                <div className="mbsc-form-group">
                    <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange}/>
                </div>
                <div className="mbsc-form-group">
                    <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
                    <Input ref={startRef} label="Starts" />
                    <Input ref={endRef} label="Ends" />
                    <Datepicker
                        select="range"
                        controls={controls}
                        touchUi={true}
                        startInput={start}
                        endInput={end}
                        showRangeLabels={false}
                        responsive={datepickerResponsive}
                        onChange={dateChange}
                        value={popupEventDate}
                    />
                    <div onClick={openColorPicker} className="event-color-c">
                        <div className="event-color-label">Color</div>
                        <div className="event-color" style={{ background: selectedColor }}></div>
                    </div>
                    {isEdit ? (
                        <div className="mbsc-button-group">
                            <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
                                Delete event
                            </Button>
                        </div>
                    ) : null}
                </div>
            </Popup>
            <Popup
                display="bottom"
                contentPadding={false}
                showArrow={false}
                showOverlay={false}
                anchor={colorAnchor}
                isOpen={colorPickerOpen}
                buttons={colorButtons}
                responsive={colorResponsive}
                ref={colorPicker}
            >
                <div className="crud-color-row">
                    {colors.map((color, index) =>
                        index < 5 ? (
                            <div
                                key={index}
                                onClick={changeColor}
                                className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                                data-value={color}
                            >
                                <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                            </div>
                        ) : null,
                    )}
                </div>
                <div className="crud-color-row">
                    {colors.map((color, index) =>
                        index >= 5 ? (
                            <div
                                key={index}
                                onClick={changeColor}
                                className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                                data-value={color}
                            >
                                <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                            </div>
                        ) : null,
                    )}
                </div>
            </Popup>
            <Snackbar
                isOpen={isSnackbarOpen}
                message="Event deleted"
                button={snackbarButton}
                onClose={handleSnackbarClose} />
        </>
    );
}

export default App;