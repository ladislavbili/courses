import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import LandingPage from './Landing'
import CoursesPage from './Courses'
import Course from './Course'
import Event from './Event'
import Timeline from './Timeline'
import CreateTimeline from './CreateTimeline'
import NewCourse from './NewCourse'
import UserManagement from './UserManagement'
import NewEvent from './NewEvent'
import EditEvent from './EditEvent'
import EditCourse from './EditCourse'
import RouteWrapper from '../../router/routes/RouteWrapper'
import * as ROUTES from '../../constants/routes'
import CourseMigration from './CourseMigration'
import CourseLayout from '../../layouts/CourseLayout'
import PrivateOnlyRoute from '../../router/routes/PrivateOnlyRoute'
import Teams from './Teams'
import Profile from './Profile'
import TeamDetail from './Teams/TeamDetail'
import NewCourseInstance from './NewCourseInstance'
import CreateTeam from './Teams/CreateTeam'
import TeamInstance from './Teams/TeamInstance'

const CoreRoutes = [
  <RouteWrapper
    path={ROUTES.DASHBOARD}
    component={LandingPage}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.TIMELINE}
    component={Timeline}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAM_EDIT}
    component={CreateTeam}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAM_CREATE}
    component={CreateTeam}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAM_INSTANCE_CREATE}
    component={TeamDetail}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAM_INSTANCE}
    component={TeamInstance}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAMS_DETAIL}
    component={TeamDetail}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_TEAMS}
    component={Teams}
    layout={CourseLayout}
    auth
  />,
  <PrivateOnlyRoute path={ROUTES.PROFILE_SETTINGS} component={Profile} />,

  <PrivateOnlyRoute path="/dashboard" component={LandingPage} />,

  <RouteWrapper
    path={ROUTES.CREATE_TIMELINE}
    component={CreateTimeline}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.EVENT_ID}
    component={Event}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.EDIT_EVENT_ID}
    component={EditEvent}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.NEW_EVENT}
    component={NewEvent}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.USER_MANAGEMENT}
    component={UserManagement}
    layout={CourseLayout}
    auth
  />,
  <RouteWrapper
    path={ROUTES.COURSE_MIGRATION}
    component={NewCourse}
    layout={CourseMigration}
    auth
  />,
  <Route path={ROUTES.COURSES} component={CoursesPage} />,
  <Route path={ROUTES.COURSE_ID} component={Course} auth />,
  <Route path={ROUTES.NEW_COURSE} component={NewCourse} auth />,
  <Route path={ROUTES.EDIT_COURSE_ID} component={EditCourse} auth />,
  <Route path={ROUTES.NEW_COURSE_INSTANCE} component={NewCourseInstance} auth />,
]

export default CoreRoutes
