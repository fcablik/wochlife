# Wochlife Portfolio App - Filip Čablík

##### current version: 3.0.0
##### Description: Wochlife App serves 2 purposes: 
  1. as Filip Čablík's personal portfolio and&nbsp;work overview
  2. creating awareness about the brand's purpose
##### #Stack: Remix.run / TypeScript / SQLite / Fly.io / prisma / GitHub Actions / Resend / and more..

<br/>

## Upcoming ToDos.. (currently in progress)
  - finish remaining dashboard routes' and components' UX/UI
  - implement translations with remix-i18 (load its locales from translations in database (translations are managable from admin by admin users))
  - re-implementing base users and onboarding possibility
    - add option for admin users to assign 'admin' permissions to other users from "/admin"
    - re-implement users' operations tests
  - implementing global-overview calendar planner - all rooms on X axis, Dates on Y axis (also called room occupancy matrix" or a "room availability matrix.")
  - implementing small calendars UX/UI, currently not very responsive
  - country specific cookie consents with its admin section management
    - content will possibly come directly from a translation for simple localization
  - fix transition of admin's sidebar child menus ( figure out a better way to handle z-index changes w/o the interaface-lags )

## Upcoming Fixes..
  - fix admin sidebar's "others" child box positioning on >lg devices
  - fix dark mode labels and fields text colors globally

## Upcoming Updates
  - update remix.run (to the latest stable, currently 2.3.1)

<br />

### About The Wochlife Stack
  Wochlife Stack is a solid and lightweight FullStack Development Environment (with the Epic-Stack as a base foundation) built to be able to create high performance Web Applications such as Wochlife Accommodations.

### Base Stack & Decisions
  To get a break from 'analysis paralysis' right from the start, I had decided to start with the already throughout tested Remix starting stack - The Epic Stack, developed by Kent C Dodds & the community. The Epic Stack is an opinionated project starter, open-source - under the MIT license. I'd used it as a starter stack to get solid selection of technologies and tools, and of-course, to ship faster. Even further on into advanced development phases, The Epic Stack is a great project reference to look up to and make better decisions in implementations. -me/fcablik

<br/>

<!-- ! REMOVE: "// Temporary DEVelopment Phase" permission request if not in dev phase -->

<br/>

### Used Fonts
  Source Code Pro (Adobe - SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007)

### Used Components
  ##### radix ui
  - "@radix-ui/react-checkbox": "^1.0.4",
  - "@radix-ui/react-dropdown-menu": "^2.0.5",
  - "@radix-ui/react-label": "^2.0.2",
  - "@radix-ui/react-slot": "^1.0.2",
  - "@radix-ui/react-toast": "^1.1.4",
  - "@radix-ui/react-tooltip": "^1.0.6",

  ##### sonner (https://sonner.emilkowal.ski/)
  - toast

<br/>

## Services Docs
- #### fly.io
- #### resend.com
