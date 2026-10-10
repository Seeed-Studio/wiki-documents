import {createContext} from 'react';

// The document layout owns sidebar visibility; navigation only reads it.
export default createContext(false);
