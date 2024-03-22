import React from 'react'
import  { CalendarDays, ChevronDown, ChevronUp, HandCoins, NotebookPen } from 'lucide-react'

export const SidebarData = [

    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <LayoutGrid />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Appointment',
        path: '/appointment',
        icon: <CalendarDays />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Registration',
        path: '/registration',
        icon: <NotebookPen />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Billing',
        path: '/billing',
        icon: <HandCoins />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'EMR',
        path: '/billing',
        icon: <LibraryBig />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Pharmacy',
        path: '/pharmacy',
        icon: <Tablets />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Laboratory',
        path: '/laboratory',
        icon: <FlaskConical />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Radiology',
        path: '/radiology',
        icon: <Radiation />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Ward Management',
        path: '/ward-management',
        icon: <Radiation />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
    {
        title: 'Inventory',
        path: '/inventory',
        icon: <Warehouse />,
        caretClosed: <ChevronDown />,
        caretOpened: <ChevronUp />,
        subNav: [
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            },
            {
                title: 'Appointment',
                path: '/appointment',
                icon: <CalendarDays />,

            }
        ]
    },
]

