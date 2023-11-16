**Basic Layout**
{- Header
  - Calender button
  - Add New Appointment

- Main Container
  - Persons Details
}

- Add New Appointment Button
  - It will render a form with the required fields.

- Add new appointement component
  - this component will have a form with all required fields in which we will fill our appointement details which is at last dispatched to the store.
  

  **Working of Redux Store**
  - In this from add New Appointment component we have pushed the data with full requirments and with multiple date and time.

**Now here we have to give a unique id to every user so we are using react-uuid package fo generating it.**


- Now we basically use redux store to dispatch action of adding new appointment and adding new user and deleting and editing it.

- Now how the redux is working is that when will I press Add New button it will only show a new component in which we have to fill every needed information and when we enter confirmation button of it that it will dispatch a action of adding a new user.

- Now every user will be given a userID so that my store will be known that when a edit action is dispatched which user we have to edit. 

- So to browse between different pages we are using react router dom.