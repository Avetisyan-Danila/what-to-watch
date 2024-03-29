import {combineReducers} from 'redux';
import {filmsProcess} from './films-process/films-process';
import {filmsData} from './films-data/films-data';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmsData,
  [NameSpace.Films]: filmsProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
