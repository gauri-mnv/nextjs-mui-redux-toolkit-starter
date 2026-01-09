# Next.js + Redux Toolkit (RTK) Learning Project

This is a comprehensive learning project built using Next.js (App Router), Redux Toolkit (RTK), and Material-UI (MUI) to understand and practice modern React state management, Next.js routing, async operations, and UI component libraries.

## 🛠️ Tech Stack

- **Next.js 13** (App Router)
- **React 18**
- **Redux Toolkit (RTK)** - Modern Redux state management
- **React-Redux** - React bindings for Redux
- **Material-UI (MUI)** - React component library
- **Emotion** - CSS-in-JS styling engine (used by MUI)
- **Next.js Font Optimization** - Google Fonts integration

## 🎯 Learning Objectives

This project focuses on understanding the following concepts:

1. **Next.js App Router**
   - File-based routing system
   - Client vs Server Components
   - Layouts and nested routing
   - API Routes

2. **Redux Toolkit (RTK)**
   - Store configuration
   - Creating slices with reducers
   - Async operations with `createAsyncThunk`
   - State persistence with LocalStorage
   - Multiple reducers in a single store

3. **State Management Patterns**
   - Centralized state management
   - Dispatching actions
   - Selecting state with hooks
   - Handling async data fetching

4. **Material-UI Integration**
   - Theme customization
   - Component usage (Cards, Buttons, TextFields, etc.)
   - Responsive design with Container
   - AppBar and Navigation

5. **Client-Side Features**
   - Form handling and validation
   - LocalStorage integration
   - Dynamic UI updates
   - Component composition

## 📸 Screenshots
![add data](https://i.ibb.co/p6GzWk1D/apifech.png)
![api data](https://i.ibb.co/GfCYKSXN/remove-User.png)
![remove data](https://i.ibb.co/SD6txpMy/todo.png)
![todo](https://i.ibb.co/gLmbNRxb/userdata-add-and-show.png)






## 📂 Project Structure

```
src/app/
 ├─ page.js              → Home route (/)
 ├─ layout.js            → Root layout with Providers
 ├─ globals.css          → Global styles
 ├─ theme.js             → MUI theme configuration
 ├─ components/
 │   ├─ AddUsers.js      → Add user form component
 │   ├─ DisplayUsers.js  → Display users list component
 │   └─ TopMenu.js       → Navigation menu component
 ├─ redux/
 │   ├─ store.js         → Redux store configuration
 │   ├─ providers.js     → Redux Provider wrapper
 │   ├─ slice.js         → Users slice with async thunk
 │   └─ todoSlice.js     → Todo list slice
 ├─ apiusers/
 │   └─ page.js          → API users page (/apiusers)
 ├─ removeuser/
 │   └─ page.js          → Remove user page (/removeuser)
 ├─ todolist/
 │   └─ page.js          → Todo list page (/todolist)
 └─ api/
     └─ hello/
         └─ route.js     → API route example
```

## 📋 Project Features & Concepts

### 1️⃣ Redux Toolkit Store Setup

The project uses Redux Toolkit's `configureStore` to create a centralized store with multiple reducers:

```javascript
// store.js
export const store = configureStore({
    reducer: {
        usersData: usersReducers,
        todosData: todoReducer
    }
})
```

**Key Learning:**
- Multiple reducers combined in a single store
- Organized state management structure

### 2️⃣ Redux Slices with Actions

**Users Slice (`slice.js`):**
- `addUser` - Add user to state and LocalStorage
- `removeUser` - Remove user from state and LocalStorage
- `fetchApiUsers` - Async thunk to fetch users from API

**Todo Slice (`todoSlice.js`):**
- `addTodos` - Add todo items to state

**Key Learning:**
- Using `createSlice` for reducer logic
- `nanoid()` for unique IDs
- LocalStorage synchronization
- Async operations with `createAsyncThunk`

### 3️⃣ Async Operations with createAsyncThunk

The project demonstrates fetching data from external APIs:

```javascript
export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});
```

**Key Learning:**
- Handling pending, fulfilled, and rejected states
- Loading and error state management
- Async data fetching patterns

### 4️⃣ Client Components

All interactive components use `"use client"` directive:

- **AddUsers.js** - Form with state and Redux dispatch
- **DisplayUsers.js** - Display list with remove functionality
- **TopMenu.js** - Navigation menu
- **TodoList Page** - Todo management interface

**Key Learning:**
- When to use Client Components
- State management in client components
- Event handling and user interactions

### 5️⃣ LocalStorage Integration

Users data persists across page refreshes:

```javascript
const getUsersFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const users = localStorage.getItem("users");
      return users ? JSON.parse(users) : [];
    }
    return [];
};
```

**Key Learning:**
- SSR-safe LocalStorage access
- State persistence patterns
- Syncing Redux state with LocalStorage

### 6️⃣ File-Based Routing

Routes are automatically created based on folder structure:

- `/` → `app/page.js` (Home)
- `/apiusers` → `app/apiusers/page.js`
- `/removeuser` → `app/removeuser/page.js`
- `/todolist` → `app/todolist/page.js`

**Key Learning:**
- Next.js App Router routing
- Nested route structure
- Dynamic route creation

### 7️⃣ Material-UI Theming

Custom theme configuration with MUI:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#333333' },
    secondary: { main: '#007bff' },
  },
  typography: { fontFamily: 'Roboto' }
});
```

**Key Learning:**
- Theme customization
- ThemeProvider setup
- Consistent UI styling

### 8️⃣ Redux Provider Setup

Redux store is provided at the root level:

```javascript
export function Providers({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}
```

**Key Learning:**
- Wrapping app with Redux Provider
- Combining multiple providers
- Global state access

## 🎨 Features Overview

### ✅ User Management
- Add users with name and email
- Display users list
- Remove users functionality
- LocalStorage persistence

### ✅ Todo List
- Add todo items
- Display todo list
- State management with Redux

### ✅ API Integration
- Fetch users from JSONPlaceholder API
- Display API data in table format
- Handle loading and error states

### ✅ Navigation
- Material-UI AppBar navigation
- Multiple routes with file-based routing
- Consistent navigation across pages

## 📸 Key Components

### 🟢 Home Page (`/`)
- Add Users form component
- Display Users list component
- Demonstrates Redux state management

### 🟢 API Users Page (`/apiusers`)
- Fetches and displays users from external API
- Demonstrates async thunks and loading states
- Table-based data presentation

### 🟢 Remove User Page (`/removeuser`)
- Table view of all users
- Remove functionality with Redux dispatch
- Demonstrates state updates

### 🟢 Todo List Page (`/todolist`)
- Simple todo management
- Add todos functionality
- Separate Redux slice demonstration

## 📌 Key Takeaways

1. **Redux Toolkit simplifies state management** - Less boilerplate, more productivity
2. **createAsyncThunk handles async operations** - Clean pattern for API calls
3. **LocalStorage integration** - Persist state across sessions
4. **Client Components for interactivity** - Use "use client" for state and events
5. **File-based routing** - Automatic route generation
6. **Material-UI accelerates UI development** - Pre-built components and theming
7. **Multiple reducers** - Organize state by feature/domain
8. **Provider pattern** - Wrap app with necessary providers

## ▶️ How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm start
   ```

## 📚 Purpose

This project was created purely for learning and practice to build a strong foundation in:
- Next.js App Router architecture
- Redux Toolkit state management
- Modern React patterns
- Material-UI component library
- Async operations and API integration
- State persistence strategies

## 👤 Contributor

**Name:** gauri-mnv  
**Email:** gauri@medianv.com

---

## 🙏 Thank You

Thank you for exploring this project! This learning journey has been focused on mastering modern React state management with Redux Toolkit and Next.js App Router. Feel free to use this as a reference for your own projects.

---

*Built with ❤️ for learning and practice*
<!-- https://chatgpt.com/share/695f7cef-67a0-8012-9f21-71e4eed4aaae -->
