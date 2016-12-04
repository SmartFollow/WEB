$(document).ready(function() {
    $('#calendar').fullCalendar({
        height: $(window).height()*0.70,
        defaultView: 'agendaWeek',
        allDaySlot: false,
        header: {
            left: 'title',
            center: '',
            right: 'today prev next'
        },
        windowResize: function(view) {
            if ($(window).width() < 514) {
                $('#calendar').fullCalendar('changeView', 'agendaDay');
            } else {
                $('#calendar').fullCalendar('changeView', 'agendaWeek');
            }
        },
        minTime: '07:00:00',
        maxTime: '21:00:00',
        events: [
            {
                title: 'B6 Bootstrap EIP - Rush Technique',
                start: '2016-02-20 10:00',
                end: '2016-02-20 18:00',
                description: 'Samedi et Dimanche, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Bootstrap EIP - Rush Technique',
                start: '2016-02-21 10:00',
                end: '2016-02-21 18:00',
                description: 'Samedi et Dimanche, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Bootstrap EIP - Suivi Rush Technique',
                start: '2016-02-22 13:00',
                end: '2016-02-22 16:00',
                description: 'D204',
                backgroundColor: '#e67e22'
            },
            {
                title: 'B6 Bootstrap EIP - Rush Technique',
                start: '2016-02-22 09:00',
                end: '2016-02-22 12:00',
                description: 'D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Bootstrap EIP - Pitch Clinic',
                start: '2016-02-22 16:00',
                end: '2016-02-22 18:00',
                description: 'Sébastien Letélié, Organisateur du Hacking Health Camp, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B0 English 2.0 - Alpha Workshop 4',
                start: '2016-02-23 10:00',
                end: '2016-02-23 11:00',
                description: 'L201',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Boostrap EIP - Daily Scrum',
                start: '2016-02-23 10:00',
                end: '2016-02-23 11:00',
                description: 'Jour #7, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Boostrap EIP - Forward',
                start: '2016-02-23 11:00',
                end: '2016-02-23 17:00',
                description: 'Jour #7, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B0 English 2.0 - Beta Workshop 4',
                start: '2016-02-23 11:00',
                end: '2016-02-23 12:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Gamma Workshop 4',
                start: '2016-02-23 12:00',
                end: '2016-02-23 13:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Delta Workshop 4',
                start: '2016-02-23 14:00',
                end: '2016-02-23 15:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Epsilon Workshop 4',
                start: '2016-02-23 14:00',
                end: '2016-02-23 15:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Epsilon Workshop 4',
                start: '2016-02-23 15:00',
                end: '2016-02-23 16:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Alpha Workshop 4',
                start: '2016-02-23 15:00',
                end: '2016-02-23 16:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Beta Workshop 4',
                start: '2016-02-23 16:00',
                end: '2016-02-23 17:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Zita Workshop 4',
                start: '2016-02-23 16:00',
                end: '2016-02-23 17:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Boostrap EIP - Conférence #5',
                start: '2016-02-23 17:00',
                end: '2016-02-23 18:30',
                description: 'Guillaume Ebelmann, CEO WhiteQuest, Hub Innovation',
                backgroundColor: '#2980b9'
            },
            {
                title: 'S0 Conférences - Soirée MUG Strasbourg Talk #7',
                start: '2016-02-23 19:00',
                end: '2016-02-23 21:00',
                description: 'Coder F#nctionnel',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Bootstrap EIP - Mentoring',
                start: '2016-02-24 10:00',
                end: '2016-02-24 11:30',
                description: 'Animé par Thierry Wendling, Intervenant Marketing ISEG',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Bootstrap EIP - Forward',
                start: '2016-02-24 12:00',
                end: '2016-02-24 17:00',
                description: 'Jour #8, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B0 English 2.0 - Zita Workshop 4',
                start: '2016-02-24 14:00',
                end: '2016-02-24 15:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Zita Workshop 4',
                start: '2016-02-24 15:00',
                end: '2016-02-24 16:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Zita Workshop 4',
                start: '2016-02-24 16:00',
                end: '2016-02-24 17:00',
                description: '',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Bootstrap EIP - Conférence #6',
                start: '2016-02-24 17:00',
                end: '2016-02-24 18:30',
                description: 'Olivier Pierrat, Practice Leader Digital Convergence - Sogeti EST, la démarche de l\'innovation',
                backgroundColor: '#2980b9'
            },
            {
                title: 'S0 Conférences - AfterWork SOGETI',
                start: '2016-02-24 18:30',
                end: '2016-02-24 20:00',
                description: '@EpitechStras, HUB Innovation',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Guidance',
                start: '2016-02-25 10:00',
                end: '2016-02-25 12:00',
                description: 'L201',
                backgroundColor: '#e67e22'
            },
            {
                title: 'B6 Bootstrap EIP - Daily Scrum',
                start: '2016-02-25 10:00',
                end: '2016-02-25 11:00',
                description: '',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B0 English 2.0 - Delta Workshop 4',
                start: '2016-02-25 10:00',
                end: '2016-02-25 11:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Gamma Workshop 4',
                start: '2016-02-25 11:00',
                end: '2016-02-25 12:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Beta Workshop 4',
                start: '2016-02-25 12:00',
                end: '2016-02-25 13:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Cold Case 4',
                start: '2016-02-25 13:00',
                end: '2016-02-25 14:00',
                description: 'Tenses overview 2, L201',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Alpha Workshop 4',
                start: '2016-02-25 14:00',
                end: '2016-02-25 15:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Delta Workshop 4',
                start: '2016-02-25 15:00',
                end: '2016-02-25 16:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Gamma Workshop 4',
                start: '2016-02-25 16:00',
                end: '2016-02-25 17:00',
                description: 'L202',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 English 2.0 - Guidance',
                start: '2016-02-25 14:00',
                end: '2016-02-25 16:00',
                description: 'L201',
                backgroundColor: '#e67e22'
            },
            {
                title: 'B0 Coaching Libre - Séances',
                start: '2016-02-25 13:30',
                end: '2016-02-25 17:00',
                description: 'M. Nottet, Salle IONIS',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 Module Communication - Journée Découverte',
                start: '2016-02-25 14:00',
                end: '2016-02-25 17:00',
                description: 'Bureau de la direction du développement',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Bootstrap EIP - PréPitchs',
                start: '2016-02-25 14:30',
                end: '2016-02-25 15:30',
                description: 'Venez faire une répétition en conditions réelles, D204',
                backgroundColor: '#e67e22'
            },
            {
                title: 'B6 Bootstrap EIP - Forward',
                start: '2016-02-25 15:30',
                end: '2016-02-25 18:00',
                description: 'Jour #9, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B6 Bootstrap EIP - Conférence #5',
                start: '2016-02-25 18:00',
                end: '2016-02-25 19:30',
                description: 'Dorian Nicoletti, CEO Atheo Ingénieurie, Témoignage d\'entrepreneur, HUB Innovation',
                backgroundColor: '#2980b9'
            },
            {
                title: 'S0 Conférences - Strasbourg Startups Meeting #9',
                start: '2016-02-25 19:00',
                end: '2016-02-25 21:00',
                description: 'Extérieur',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 Coaching Libre - Séances',
                start: '2016-02-26 09:00',
                end: '2016-02-26 12:00',
                description: 'M. Nottet, D308',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Bootstrap EIP - Daily Scrum',
                start: '2016-02-26 10:00',
                end: '2016-02-26 11:00',
                description: 'Jour #10, D204',
                backgroundColor: '#2980b9'
            },
            {
                title: 'B0 Module Communication - Lycée Georges Imbert',
                start: '2016-02-26 13:30',
                end: '2016-02-26 17:00',
                description: 'Extérieur',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 Coaching Libre - Séances',
                start: '2016-02-26 13:30',
                end: '2016-02-26 17:00',
                description: 'M. Nottet, D308',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B6 Bootstrap EIP - Pitch Contest',
                start: '2016-02-26 14:00',
                end: '2016-02-26 15:00',
                description: 'D204',
                backgroundColor: '#e67e22'
            },
            {
                title: 'B6 Bootstrap EIP - Forum Forward',
                start: '2016-02-26 15:00',
                end: '2016-02-26 17:00',
                description: 'D203',
                backgroundColor: '#e67e22'
            },
            {
                title: 'S0 Hub Events - Pitch et Forum EIP',
                start: '2016-02-26 14:00',
                end: '2016-02-26 16:00',
                description: 'D204',
                backgroundColor: '#95a5a6'
            },
            {
                title: 'B0 Module Communication - JPO 5',
                start: '2016-02-27 09:30',
                end: '2016-02-27 17:30',
                description: '',
                backgroundColor: '#95a5a6'
            }
        ],
        eventClick: function(calEvent, jsEvent, view) {
            var title = calEvent.title;
            var start = moment(calEvent.start).format("MMMM Do YYYY, h:mm a");
            var end = moment(calEvent.end).format("MMMM Do YYYY, h:mm a");
            var description = calEvent.description;

            $.ajax({
                type: "POST",
                url: "pages/event_info.php",
                data: 'title='+title+'&start='+start+'&end='+end+'&description='+description,
                success: function(data) {
                    $.fancybox(data);
                }
            });
        }
    });
});
