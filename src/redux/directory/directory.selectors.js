import {createSelector } from 'reselect';
//selectDirectory recieves a state, and returns state.directory
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);